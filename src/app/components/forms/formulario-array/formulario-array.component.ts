import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss']
})
export class FormularioArrayComponent implements OnInit {
  miFormularioArray: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.miFormularioArray= this.formBuilder.group({
      nombre:'',
      apellido:'',
      telefonos:this.formBuilder.array([])
    })
  }
 /// metodo getenrr para obtener el formulario de la lista telefonos
  get telefonosFomulario(): FormArray{
    return this.miFormularioArray.get('telefonos') as FormArray
  }

  // metodos para añadir telefonos
anadirTelefonos(){
  /// creamos un grupo telefono
  const telefono = this.formBuilder.group({
    prefijo:'',
    numero:''
  });
  // amadinkos el grupo a la lista de telefono
  this.telefonosFomulario.push(telefono);
}
// metodo para eliminar telefonos de la lista
 elimarTelefono(index: number){
  this.telefonosFomulario.removeAt(index)
 }
}
