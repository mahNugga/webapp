export class Reservacion{
    constructor(
       public servicio:string,
       public duracion: any,
       public precio: any,
       public horaseleccion: any,
       public empleado_id: number,
       public fechasleccion: any,
       public cliente_id: number,
       public fecha_creacion: Date,
       public total:number,
       public estado: number
    ){}
}