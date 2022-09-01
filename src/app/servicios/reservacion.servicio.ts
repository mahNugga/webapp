import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
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
    mostrarReservaCliente(id:any):Observable<any>{
        let param = new HttpParams()
        .set("id",id);
        let headers = new HttpHeaders()
        .set('Content-Type','application/json');

        return this._http.get(this.url+'consulta-reservacioncliente',{headers:headers,params:param});

    }

    mostrarOneReservaEmp(id:any):Observable<any>{
        let param = new HttpParams()
        .set("id",id);
        let headers = new HttpHeaders()
        .set('Content-Type','application/json');

        return this._http.get(this.url+'muestra-siguientetrabajo',{headers:headers,params:param});
    }

    mostrarReservaEmp(id:any):Observable<any>{
        let param = new HttpParams()
        .set("id",id);
        let headers = new HttpHeaders()
        .set('Content-Type','application/json');

        return this._http.get(this.url+'muestra-reservaempleado',{headers:headers,params:param});
    }

    mostrarReservaAdmin():Observable<any>{
        let headers = new HttpHeaders()
        .set('Content-Type','application/json');

        return this._http.get(this.url+'muestra-reservaadmin',{headers:headers});
    }

    buscaFechaExiste(fechabus:any,empid:any):Observable<any>{
        let param = new HttpParams()
        .set("fechabus",fechabus)
        .set("empid",empid);
        let headers = new HttpHeaders()
        .set('Content-Type','application/json');

        return this._http.get(this.url+'busca-fechareserva',{headers:headers,params:param});
    }

}