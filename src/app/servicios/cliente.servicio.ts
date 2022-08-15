import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { ClienteBasic } from "../modelos/clienteBasic";
import { global } from "./global";

@Injectable()
export class ClienteServicio{
    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url = global.url;
    }

    seleccionarNombreCab(id:number):Observable<any>{
        let param = new HttpParams()
        .set("id",id);
        let headers = new HttpHeaders()
        .set('Content-Type','application/json');
        return this._http.get(this.url+'cliente-basicinfo',{headers:headers,params:param});
    }
}