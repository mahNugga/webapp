export class Empleado{
    constructor(
       
       public nombre: string,
       public apellido: string,
       public correo: string,
       public password: string,
       public telefono: string,
       public direccion: string,
       public rol: number,
       public fecha_creacion: Date,
       public estado: number
    ){}
}