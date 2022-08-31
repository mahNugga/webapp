import { Component, OnInit } from '@angular/core';
import { EmpleadoC } from '../modelos/empleadoC';
import { MatTableDataSource } from '@angular/material/table';
import { EmpleadoServicio } from '../servicios/empleado.servicio';

@Component({
  selector: 'app-mantenimientoempleado',
  templateUrl: './mantenimientoempleado.component.html',
  styleUrls: ['./mantenimientoempleado.component.scss'],
  providers: [EmpleadoServicio]
})
export class MantenimientoempleadoComponent implements OnInit {

  displayedColumns:string[] =['apellido','correo','rol','estado','Edicion'];
  dataSource!: MatTableDataSource<EmpleadoC>;
  public text="row 1";
  constructor(
    private _empleadoservicio:EmpleadoServicio
  ) {
    this.sudoempleado();
    console.log(this.dataSource);
   }

  ngOnInit(): void {
  }

  sudoempleado(){
    this._empleadoservicio.sudoListaEmpleados().subscribe({
      next:(n)=>{
        if(n.listaEmpleado){
          this.dataSource = n.listaEmpleado;
          console.log(this.dataSource);
        }
      }, error:(e)=>console.log(e)
    });
  }

}
