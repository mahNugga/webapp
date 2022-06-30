import { Component } from "@angular/core";

@Component({
    selector: 'registro',
    templateUrl:'./registro.component.html'
})

export class registroComponent{
    public sub_cabecera: string;
    constructor(){
        this.sub_cabecera = "Pagina de registro de nuevo usuario";
        console.log("componente registro cargado");
    }
}