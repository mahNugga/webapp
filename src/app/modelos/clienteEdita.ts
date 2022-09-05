export class ClienteEdita{
    constructor(
        public id:number,
        public nombre: string,
        public apellido: string,
        public correo: string,
        public direccion:string,
        public password: string,
        public telefono: string
    ){}
}