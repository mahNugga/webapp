import { Component, OnInit } from '@angular/core';
import { Empleado } from '../modelos/empleado';
import { EmpleadoServicio } from '../servicios/empleado.servicio';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogGenCreacionComponent } from '../dialog-gen-creacion/dialog-gen-creacion.component';

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
  public genero="Empleado";
  constructor(
    private _empleadoServicio: EmpleadoServicio,
    private dialog: MatDialog
  ) { 
    this.titulo = "Registrar nuevo empleado";
    this.empleado = new Empleado('','','','','','', 0,new Date(),1);
    
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
          this.dialog.open(DialogGenCreacionComponent,{
            data:this.genero
          });
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
