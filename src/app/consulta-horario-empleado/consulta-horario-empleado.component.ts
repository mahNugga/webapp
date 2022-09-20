import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Horario } from '../modelos/horario';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-horario-empleado',
  templateUrl: './consulta-horario-empleado.component.html',
  styleUrls: ['./consulta-horario-empleado.component.scss']
})
export class ConsultaHorarioEmpleadoComponent implements OnInit {

  displayedColumns:string[] = ['nombre','rangoinicio','rangofin','horainicio','horafin'];
  dataSource:MatTableDataSource<Horario>;
  public text="row 1";
  public horarios:any;
  public genero='Horario';
  constructor(
    private _location:Location,
    private _ruta:Router
  ) { 
    this.horarios = _ruta.getCurrentNavigation()?.extras?.state?.['horarios'];
    this.dataSource = this.horarios;
    console.log(this.horarios);
  }

  ngOnInit(): void {
  }

  volver(){
    this._location.back();
  }
}
