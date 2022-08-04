import { Component, OnInit } from '@angular/core';
import { Empleado } from '../modelos/empleado';
import { EmpleadoServicio } from '../servicios/empleado.servicio';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogEmpleadoComponent } from '../dialog-empleado/dialog-empleado.component';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.scss'],
  providers: [EmpleadoServicio]
})
export class CrearEmpleadoComponent implements OnInit  {
  public titulo:string;
  public empleado: Empleado;
  public status!: string;

  constructor(
    private _empleadoServicio: EmpleadoServicio,
    private dialog: MatDialog
  ) { 
    this.titulo = "Registrar nuevo empleado";
    this.empleado = new Empleado('','','','','','', 0,new Date(),"empleado");
    
  }

  ngOnInit(): void {
  }
  onSubmit(form: any){
    console.log(this.empleado);
    this._empleadoServicio.guardarEmpleado(this.empleado).subscribe(
      response =>{
        if(response.empleado){
          this.status = 'success';
          form.reset();
          this.dialog.open(DialogEmpleadoComponent);
        }else{
          this.status = 'fail';
        }

      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}
