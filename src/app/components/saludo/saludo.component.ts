import { outputAst } from '@angular/compiler';
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {
@Input() name ='Anonimo';
@Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

myStyle: object ={
  color:'blue',
  fontSize:'20px',
  fontWeight:'bold'
}

constructor(){}
  ngOnDestroy(): void {
    console.log("ngOnDestroy");

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");

  }
ngOnInit(): void{
console.log("ngOninit");
}

enviarMsjPadre(): void{
this.mensajeEmitter.emit(`Hola, ${this.name}`);
}

}


// orden de ciclo de vida
//ngChange *** carga de cambios del componente
//ngOninit *** carga inicial de componente
// ngAfterContentInit
//ngAfterContentCheck
///ngAfterViewInit
///ngAfterViewCheck
///ngAfterContentCheck
///ngAfterViewCheck
//ngOnDestroy *** /// destruccion de componente
