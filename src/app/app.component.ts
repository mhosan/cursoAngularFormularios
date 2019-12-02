import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formularios';
  form: FormGroup;

  constructor(){
    this.form=new FormGroup({
      nombreFC : new FormControl('', Validators.required),
      apellidoFC : new FormControl('', Validators.required),
      correoFC : new FormControl('', [Validators.required, Validators.email])
    });
  }
  
  submitForm(){
    console.log(this.form.value);
    console.log(this.form); //es el formGroup
    console.log(this.form.valid);
  }
}
