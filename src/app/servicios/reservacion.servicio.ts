import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from "rxjs";
import { Reservaciondb } from "../modelos/reservaciondb";
import { global } from "./global";

@Injectable()
export class ReservacionServicio{
    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url = global.url;
    }

    reservarReservacion(reserva:Reservaciondb):Observable<any>{
        let params = JSON.stringify(reserva);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'/reservar',params,{headers:headers});
    }
}