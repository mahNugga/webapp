import { Component, OnInit } from '@angular/core';
import { Insumo } from '../modelos/insumo';
import { InsumoServicio } from '../servicios/insumo.servicio';

@Component({
  selector: 'app-comp-consulta-insumo',
  templateUrl: './comp-consulta-insumo.component.html',
  styleUrls: ['./comp-consulta-insumo.component.scss'],
  providers:[InsumoServicio]
})
export class CompConsultaInsumoComponent implements OnInit {
  public insumos: Insumo[] = []; 
  constructor(
    private _insumoServicio: InsumoServicio
  ) { }

  ngOnInit(): void {
    this.listarInsumo();
  }

  listarInsumo(){
    this._insumoServicio.listaInsumo().subscribe(
      response=>{
        if(response){
          this.insumos = response.listaInsumo;
        }
        console.log(this.insumos);
      },
      error=>{
        console.log(<any>error)
      }
      
    );
  }

}
