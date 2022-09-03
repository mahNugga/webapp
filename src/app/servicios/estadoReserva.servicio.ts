import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from "rxjs";
import { EstadoReserva } from "../modelos/estadoReserva";
import { global } from "./global";

@Injectable()
export class EstadoReservaServicio{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    mantenimientoEstadoReservalista():Observable<any>{
        let headers = new HttpHeaders()
        .set('Content-Type','application/json');

        return this._http.get(this.url+'muestra-estadosreserva',{headers:headers});
    }
}