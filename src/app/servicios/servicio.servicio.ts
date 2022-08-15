import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { global } from "./global";
import { Servicio } from "../modelos/servicio";

@Injectable()

export class ServicioServicio{
    public url: string;

    constructor(
        private _http:HttpClient
    ){
        this.url = global.url;
    }

    guardarServicio(servicio: Servicio):Observable<any>{
        let params = JSON.stringify(servicio);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'nuevo-servicio',params,{headers:headers});
    }

    listaServicio():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'consulta-servicio',{headers:headers});
    }
}