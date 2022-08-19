export class Reservaciondb{
    constructor(
       public cabecera:string,
       public notas:string,
       public mensaje:string,
       public fechaseleccion: any,
       public descuento:number,
       public subtotal:number,
       public iva:number,
       public total:number,
       public fecha_creado: Date,
       public servicio_id:number,
       public empleado_id: number,
       public cliente_id: number,
       
    ){}
}