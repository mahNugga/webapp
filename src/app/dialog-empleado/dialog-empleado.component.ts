import { Component, OnInit } from '@angular/core';
import { Empleado } from '../modelos/empleado';
import { EmpleadoServicio } from '../servicios/empleado.servicio';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-empleado',
  templateUrl: './dialog-empleado.component.html',
  styleUrls: ['./dialog-empleado.component.scss'],
  providers:[EmpleadoServicio]
})
export class DialogEmpleadoComponent implements OnInit {
  public titulo = 'Edicion registro de Empleado';
  public empleado: Empleado;
  constructor(
    private _empleadoServicio: EmpleadoServicio,
    private dialogref: MatDialogRef<DialogEmpleadoComponent>
  ) {
    
    this.empleado = new Empleado('','','','','','',0,new Date(),'activo');
   }

  ngOnInit(): void {
  }

  onSubmit(form:any){

  }

  EmpleadoEditado(form :any){
    console.log(this.empleado);
    this._empleadoServicio.editarEmpleado(this.empleado).subscribe(
      response =>{
        if(response.empleado){
          form.reset();
          this.dialogref.close('Editado');
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}
