import { Component, OnInit } from '@angular/core';
import { Reservaciondb } from '../modelos/reservaciondb';
import { MatTableDataSource } from '@angular/material/table';
import { ReservacionServicio } from '../servicios/reservacion.servicio';
import { EstadoReservaServicio } from '../servicios/estadoReserva.servicio';
import { EstadoReserva } from '../modelos/estadoReserva';
import { Horario } from '../modelos/horario';

@Component({
  selector: 'app-mostrarreservaadmin',
  templateUrl: './mostrarreservaadmin.component.html',
  styleUrls: ['./mostrarreservaadmin.component.scss'],
  providers: [ReservacionServicio,EstadoReservaServicio]
})
export class MostrarreservaadminComponent implements OnInit {

  displayedColumns:string[] =['cliente','empleado','fecha','hora','servicio','estadoactual','estado'];
  dataSource!: MatTableDataSource<Reservaciondb>;
  public text="row 1";
  public reserva:any;
  public estado:EstadoReserva;
  public estadosR:EstadoReserva[]=[];
  constructor(
    private _reservaservicio:ReservacionServicio,
    private _estadoreservaservicio: EstadoReservaServicio
  ) { 
    this.detalleReservaciones();
    this.estado = new EstadoReserva(-1,'','',-1);
  }

  ngOnInit(): void {
    this.listaEstadosReservaselect();
  }

  detalleReservaciones(){
    this._reservaservicio.mostrarReservaAdmin().subscribe({
      next:(n)=>{
        if(n.reseDe){
          this.dataSource = n.reseDe;
          console.log(this.dataSource);
        }
      },error:(e)=>console.log(e)
    });
  }

  listaEstadosReservaselect(){
    this._estadoreservaservicio.mantenimientoEstadoReservalista().subscribe({
      next:(n)=>{
        if(n.listilla){
          this.estadosR = n.listilla
          console.log(this.estadosR);
          console.log(n.listilla);
        }
      },error:(e)=>console.log(e)
    });
  }

  VamoPerrucho($event:any){
    this._estadoreservaservicio.mantenimientoEstadoReservalista().subscribe({
      next:(n)=>{
        if(n.listilla){
          this.estadosR = n.listilla
        }
      },error:(e)=>console.log(e)
    });
  }

  cambiaEstadoReserva(event:any,row:any){
    console.log(row);
    let val = event.target.value;
    console.log(val);
    let id = row.reserva_id
    console.log(id);
    //let id = this.estadosR;
    //console.log(id);
    this._reservaservicio.cambiaEstadoReserva(id,val).subscribe({
      next:(n)=>{
        console.log("estado cambiao");
      },error:(e)=>console.log(e)
    });
  }

}
