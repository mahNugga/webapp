export class Cliente{
    constructor(
        public id:number,
        public nombre: string,
        public apellido: string,
        public correo: string,
        public password: string,
        public telefono: string
    ){}
}