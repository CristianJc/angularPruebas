import { Component,OnInit} from '@angular/core';


export type Producto ={
  nombre: string,
  precio: number,
  description:string
}
@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss']
})
export class BasicListComponent implements OnInit {
cargando: boolean=false;
option: number=0;
listaElementos: Producto[]=[
  {
    nombre: 'Leche',
    precio: 10,
    description:'Leche entera'
  },
  {
    nombre: 'Carne',
    precio: 15,
    description:'Carne de res'
  }
];

ngOnInit(): void{
}

cambiarCargando(){
  this.cargando= !this.cargando;
}

escogerOpcion(opcion: number){
  this.option = opcion

}
}
