import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { ClienteBasic } from "../modelos/clienteBasic";
import { global } from "./global";
import { ClienteRegistro } from "../modelos/clienteregistro";
import { ClienteEdicion } from "../modelos/clienteActualizar";

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

    registranuevo(clienteregistro:ClienteRegistro):Observable<any>{
        let params = JSON.stringify(clienteregistro);
        let headers = new HttpHeaders()
        .set('Content-Type','application/json');

        return this._http.post(this.url+'nuevo-cliente',params,{headers:headers});
    }

    listarClientes():Observable<any>{
        let headers = new HttpHeaders()
        .set('Content-Type','application/json');

        return this._http.get(this.url+'consulta-cliente',{headers:headers});
    }

    detalleDatosCliente(id:any):Observable<any>{
        let param = new HttpParams()
        .set("id",id);
        let headers = new HttpHeaders()
        .set('Content-Type','application/json');

        return this._http.get(this.url+'datos-perfilcliente',{headers:headers,params:param});
    }

    actualizaDatosCliente(form:ClienteEdicion,id:any):Observable<any>{
        let params = JSON.stringify(form);
        let param = new HttpParams()
        .set("id",id);
        let headers = new HttpHeaders()
        .set('Content-Type','application/json');

        return this._http.put(this.url+'actualiza-registrocliente',params,{headers:headers,params:param});
    }
}