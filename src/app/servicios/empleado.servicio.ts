import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from "rxjs";
import { Empleado } from "../modelos/empleado";
import { global } from "./global";

@Injectable()
export class EmpleadoServicio{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    testServicio(){
        return 'Test del servicio Empleado en Angular';
    }

    guardarEmpleado(empleado: Empleado):Observable<any>{
        let params = JSON.stringify(empleado);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'nuevo-empleado',params,{headers:headers});
    }
}