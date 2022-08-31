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

    mostrarHorarioEmpleado(id:any):Observable<any>{
        let param = new  HttpParams()
        .set("id",id);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'consulta-horarioempleado',{headers:headers,params:param});
    }

    actualizaGuardaHorario(horario:Horario,id:any){
        let params = JSON.stringify(horario);
        let param = new HttpParams()
        .set("id",id);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.put(this.url+'edita-horarioexterno',params,{headers:headers,params:param});
    }

    detalleHorariosCompleto():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'consulta-horarioadmin',{headers:headers});
    }

    casiBorraHorario(id:any){
         let param = new HttpParams()
        .set("id",id); 
        //let params = id;
        console.log(param);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.put(this.url+'elimina-horario',{headers:headers,params:param});
    }

}