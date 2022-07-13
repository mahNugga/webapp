import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../modelos/empleado';
import { EmpleadoServicio } from '../servicios/empleado.servicio';
import { global } from '../servicios/global';

@Component({
  selector: 'app-comp-consulta-empleado',
  templateUrl: './comp-consulta-empleado.component.html',
  styleUrls: ['./comp-consulta-empleado.component.scss'],
  providers: [EmpleadoServicio]
})
export class CompConsultaEmpleadoComponent implements OnInit {
  public empleados: Empleado[] = [];
  public test = ['jUAN','TONIO','MOCHO','PEPE'];
  constructor(
    private _empleadoservicio: EmpleadoServicio,
    
  ) { 
    
  }

  ngOnInit(): void {
    this.listaEmpleado();
  }
  consultaEmpleado(){
    this._empleadoservicio.consultarEmpleado().subscribe(
      response=>{
        
        console.log(response);
      },
      error=>{
        console.log(<any>error)
      }
      
    );
  }

  listaEmpleado(){
    this._empleadoservicio.listaEmpleado().subscribe(
      response=>{
        if(response){
          this.empleados = response.listaEmpleado;
        }
        console.log(this.empleados);
      },
      error=>{
        console.log(<any>error)
      }
      
    );
  }
}
