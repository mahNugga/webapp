import { Time } from "@angular/common";
import { Timestamp } from "rxjs";

export class Horario{
    constructor(
        public nombre:string,
        public descripcion:string,
        public fecha:Date,
        public rango_inicio:Date,
        public rango_fin:any,
        public hora_inicio:any,
        public hora_fin:any,
        public estado:number,
        public empleado_id:number
    ){}
}