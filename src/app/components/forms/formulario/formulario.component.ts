import { Component, OnInit } from '@angular/core';

//Ejemplo de formulario reactivo

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  /// definimos nuestro formulario
  miForulario: FormGroup= new FormGroup({}) ;

  //inyectamos la clase formbulder para contruir el forgrpuo
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Iniciamos los campos del formulario y sus valores por defecto

    this.miForulario = this.formBuilder.group({
      nombre:'',
      apellido:'',
      email:'',
      telefono:'',
      direccion:'',

    });


  //nos subrimimos a los cambios que ocurran en el formulario y lo vamos a mostrar en consola

  this.miForulario.valueChanges.subscribe(  console.log)

}


}
