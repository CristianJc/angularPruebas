import { Injectable } from '@angular/core';
///importamos la lista de mocks

import { CONTACTOS } from '../mocks/conctactos.mocks';
import { IContacto } from '../models/contacto.interface';

// importamos observables de rxjs

import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Promise<IContacto[]>{
    //return CONTACTOS; // nos devuel un listado de contactos
    return Promise.resolve(CONTACTOS);
  }

  obtenerContactosporID(id:number): Observable<IContacto> | undefined{
    const contacto= CONTACTOS.find((contacto:IContacto)=>contacto.id ===id);

    // Creamos un observable
    let observable: Observable<IContacto>= new Observable(observer =>{
      observer.next(contacto); ///emitir un valor a todo componente suscrito
      observer.complete(); /// no emitimos mas valores
    })
    if(contacto){
      return  observable
    }else{
      return;
    }
  }
}
