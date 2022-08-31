import { Component, OnInit } from '@angular/core';
import { Reservaciondb } from '../modelos/reservaciondb';
import { MatTableDataSource } from '@angular/material/table';
import { ReservacionServicio } from '../servicios/reservacion.servicio';

@Component({
  selector: 'app-mostrarreservaadmin',
  templateUrl: './mostrarreservaadmin.component.html',
  styleUrls: ['./mostrarreservaadmin.component.scss'],
  providers: [ReservacionServicio]
})
export class MostrarreservaadminComponent implements OnInit {

  displayedColumns:string[] =['cliente','empleado','fecha','hora','servicio','estado'];
  dataSource!: MatTableDataSource<Reservaciondb>;
  public text="row 1";
  public reserva:any;
  constructor(
    private _reservaservicio:ReservacionServicio
  ) { 
    this.detalleReservaciones();
  }

  ngOnInit(): void {
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

}
