import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListModule } from './modules/list/list.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ListModule,
    //importar el modulo httpClienteModule para hacer peticiones http
    HttpClientModule,
    // Importamos reactive formsModule para trabajar con formularios reactivos

    ReactiveFormsModule,
    BrowserAnimationsModule,
    // importamos los dulos de angular materia ui
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
