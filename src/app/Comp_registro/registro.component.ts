import { Component } from "@angular/core";
import { ClienteRegistro } from "../modelos/clienteregistro";
import { ClienteServicio } from "../servicios/cliente.servicio";
import { Router } from "@angular/router";

@Component({
    selector: 'registro',
    templateUrl:'./registro.component.html',
    providers:[ClienteServicio]
})

export class registroComponent{
    public sub_cabecera: string;
    public cliente;
    public titulo="Sistema para el centro de belleza Carolina Aguirre";
    constructor(
        private _clienteservicio: ClienteServicio,
        private route:Router
    ){
        this.sub_cabecera = "Pagina de registro de nuevo usuario";
        console.log("componente registro cargado");
        this.cliente = new ClienteRegistro('','','','','','',0); 
    }

    registrar(form:any){
        this._clienteservicio.registranuevo(this.cliente).subscribe({
            next:(n)=>{
                console.log(n);
                form.reset();
                this.route.navigate(['/']);
            },error:(e)=> console.log(e)
        });
    }
}

