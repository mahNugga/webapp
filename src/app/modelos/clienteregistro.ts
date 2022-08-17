export class ClienteRegistro{
    constructor(
        public nombre: string,
        public apellido: string,
        public correo: string,
        public password: string,
        public telefono: string,
        public direccion:string,
        public active:number
    ){}
}