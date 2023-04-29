import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.scss']
})
export class FormularioValidadoComponent implements OnInit{
miFormularioValidado: FormGroup = new FormGroup({});
constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.miFormularioValidado= this.formBuilder.group({
      nombre:['',Validators.required], ///campo es obligatorio
      apellido:'',
      ///campo boligatorio con valores minimos y maximos
      edad:['',Validators.compose([Validators.required, Validators.min(18), Validators.max(99)])],
      email:['', Validators.compose([Validators.required, Validators.email])],
      password:['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*')])],
      acepta:[false, Validators.requiredTrue]
    })

  }

  get nombre(){
    return this.miFormularioValidado.get('nombre')
  }
  get apellido(){
    return this.miFormularioValidado.get('apellido')
  }
  get edad(){
    return this.miFormularioValidado.get('edad')
  }
  get email(){
    return this.miFormularioValidado.get('email')
  }
  get password(){
    return this.miFormularioValidado.get('password')
  }
  get acepta(){
    return this.miFormularioValidado.get('acepta')
  }

  /// Metodo de submit del formulario
  enviarFormulario(){
if (this.miFormularioValidado.valid) {
  console.table(this.miFormularioValidado.value)
  /// resetar los campos del formulario

  this.miFormularioValidado.reset();

}
  }
}
