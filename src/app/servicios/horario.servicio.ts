import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Horario } from "../modelos/horario";
import { global } from "./global";

@Injectable()
export class HorarioServicio{
    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url = global.url;
    }

    guardarHorario(horario:Horario):Observable<any>{
        let params = JSON.stringify(horario);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        
        return this._http.post(this.url+'nuevo-horario',params,{headers:headers});
    }

    matchHorario(fechacomparar:any):Observable<any>{
        let param = new  HttpParams()
        .set("fechaing",fechacomparar);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        
        return this._http.get(this.url+'verifica-fechas',{headers:headers,params:param});
    }

}