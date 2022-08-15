import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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

}