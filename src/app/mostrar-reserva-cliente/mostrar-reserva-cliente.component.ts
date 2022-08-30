import { Component, OnInit } from '@angular/core';
import { Reservaciondb } from '../modelos/reservaciondb';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mostrar-reserva-cliente',
  templateUrl: './mostrar-reserva-cliente.component.html',
  styleUrls: ['./mostrar-reserva-cliente.component.scss']
})
export class MostrarReservaClienteComponent implements OnInit {

  displayedColumns: string[] = ['nombre','hora','fecha','ora'];
  dataSource: MatTableDataSource<Reservaciondb>;
  public text="row 1";
  public extras:any;
  public datos:any;
  constructor(
    private _ruta:Router,
    private _location:Location
  ) { 
    this.extras =  this._ruta.getCurrentNavigation()?.extras?.state?.['reserva'];
    console.log("las posibilidades son:");
    console.log(this.extras);
    this.datos = this.extras;
    this.dataSource = new MatTableDataSource();
    this.dataSource = this.extras;
  }

  ngOnInit(): void {

  }

  volver(){
    this._location.back();
  }

}
