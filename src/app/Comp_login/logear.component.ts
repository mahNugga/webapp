import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'inicioSesion',
    templateUrl:'./logear.component.html'
})

export class logearComponent{
    public sub_cabecera: string = "Componente de Inicio de sesion";
    constructor(
        private _router:Router
    ){
        
    }
    registrar(){
        this._router.navigate(['/registro']);
    }
}