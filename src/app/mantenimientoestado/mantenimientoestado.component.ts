import { Component, OnInit } from '@angular/core';
import { EstadoReserva } from '../modelos/estadoReserva';
import { MatTableDataSource } from '@angular/material/table';
import { EstadoReservaServicio } from '../servicios/estadoReserva.servicio';

@Component({
  selector: 'app-mantenimientoestado',
  templateUrl: './mantenimientoestado.component.html',
  styleUrls: ['./mantenimientoestado.component.scss'],
  providers: [EstadoReservaServicio]
})
export class MantenimientoestadoComponent implements OnInit {

  displayedColumns:string[] = ['nombre','descripcion','estado'];
  dataSource!:MatTableDataSource<EstadoReserva>;

  constructor(
    private _estadoreservaservicio:EstadoReservaServicio
  ) { 
    this.listaEstadosReserva();
  }

  ngOnInit(): void {
  }

  listaEstadosReserva(){
    this._estadoreservaservicio.mantenimientoEstadoReservalista().subscribe({
      next:(n)=>{
        if(n.listilla){
          this.dataSource= n.listilla;
        }
      },error:(e)=>console.log(e)
    });
  }
}
