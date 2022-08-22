import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservaciondb } from '../modelos/reservaciondb';
import { ReservacionServicio } from '../servicios/reservacion.servicio';

@Component({
  selector: 'app-reserva-confirmacion',
  templateUrl: './reserva-confirmacion.component.html',
  styleUrls: ['./reserva-confirmacion.component.scss'],
  providers: [ReservacionServicio]
})
export class ReservaConfirmacionComponent implements OnInit {

  public extras:any;
  public reservacion:Reservaciondb;
  constructor(
    private _ruta:Router,
    private _reservarservicio:ReservacionServicio
  ) { 
    this.extras=this._ruta.getCurrentNavigation()?.extras.state?.['re'];
    this.reservacion = new Reservaciondb('','','mensaje:',0,this.extras.horaseleccion,0,0,12,0,new Date(),this.extras.servicio_id,this.extras.empleado_id,this.extras.cliente_id);
  }

  ngOnInit(): void {
  }
  reservar(){
    this.reservacion.total= this.extras.total;
    this.reservacion.fechaseleccion= this.extras.fechasleccion;
    this._reservarservicio.reservarReservacion(this.reservacion).subscribe({

    });
  }
}
