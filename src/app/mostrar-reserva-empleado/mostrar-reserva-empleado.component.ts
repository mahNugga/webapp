import { Component, OnInit } from '@angular/core';
import { Reservaciondb } from '../modelos/reservaciondb';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mostrar-reserva-empleado',
  templateUrl: './mostrar-reserva-empleado.component.html',
  styleUrls: ['./mostrar-reserva-empleado.component.scss']
})
export class MostrarReservaEmpleadoComponent implements OnInit {

  displayedColumns:string[] =['apellido','fecha','hora','servicio','Edicion'];
  dataSource: MatTableDataSource<Reservaciondb>;
  public text="row 1";
  public horarios:any;
  public extras:any;
  constructor(
    public activeroute:ActivatedRoute,
    private _ruta:Router,
    private _location:Location
  ) { 
    //this.extras =  this.activeroute.snapshot.queryParamMap.get('reservas');
    this.extras =  this._ruta.getCurrentNavigation()?.extras?.state?.['reservas'];
    this.horarios = this.extras;
    console.log(this.horarios);
    this.dataSource = new MatTableDataSource();
    this.dataSource = this.horarios;
  }

  ngOnInit(): void {
  }

  volver(){
    this._location.back();
  }

}
