import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from "rxjs";
import { global } from "./global";
import { Insumo } from "../modelos/insumo";

@Injectable()
export class InsumoServicio{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    guardarInsumo(insumo: Insumo):Observable<any>{
        let params = JSON.stringify(insumo);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'nuevo-insumo',params,{headers:headers});
    }

    listaInsumo():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'lista-insumo',{headers:headers});
    }
}