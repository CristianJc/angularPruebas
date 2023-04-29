import { Component, OnInit, OnDestroy } from '@angular/core';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss'],
})
export class ListaContactosComponent implements OnInit, OnDestroy {
  ListaContacto: IContacto[] = [];
  contactoSelected: IContacto | undefined;

  //suscription de servicio
  suscription: Subscription | undefined;
  //inyectos en el constructor el servicio de contactos
  constructor(private contactoService: ContactoService) {}

  ngOnInit(): void {
    this.contactoService
      .obtenerContactos()
      .then((lista: IContacto[]) => (this.ListaContacto = lista))
      .catch((error) =>
        console.error(`error al recuperar la lista de contactoss ${error}`)
      )
      .finally(() => 'finalizada la ejecucion de contactoservice');
  }

  obtenerContactoporId(id: number) {
   this.suscription= this.contactoService.obtenerContactosporID(id)?.subscribe((contacto: IContacto)=>this.contactoSelected= contacto)
    // this.contactoService
    //   .obtenerContactosporID(id)
    //   ?.then((contacto: IContacto) => (this.contactoSelected = contacto)).catch((error)=>console.error(`error al recuperar la promersa ${error}`)).finally(() => 'finalizada la ejecucion de obtenercontacto por id');
  }

  ngOnDestroy(): void {

this.suscription?.unsubscribe();
  }
}
