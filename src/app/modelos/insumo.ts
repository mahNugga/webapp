export class Insumo{
    constructor(
        public nombre: string,
        public descripcion: string,
        public costo: number,
        public estado: number,
        public stock: number,
        public stock_ideal: number
    ){}
}