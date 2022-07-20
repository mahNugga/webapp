import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../modelos/usuario";
import { global } from "./global";

@Injectable()
export class UsuarioServicio{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    revisarIngreso(usuario:Usuario):Observable<any>{
        let params = JSON.stringify(usuario); 
        let param = new HttpParams()
        .set("correo",usuario.correo).set('password',usuario.password);
        let headers = new HttpHeaders()
        .set('Content-Type','application/json');
        return this._http.get(this.url+'ingreso',{headers:headers,params:param});
    }
}
