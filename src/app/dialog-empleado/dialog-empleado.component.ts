import { Component, Inject, OnInit } from '@angular/core';
import { Empleado } from '../modelos/empleado';
import { EmpleadoServicio } from '../servicios/empleado.servicio';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-empleado',
  templateUrl: './dialog-empleado.component.html',
  styleUrls: ['./dialog-empleado.component.scss'],
  providers:[EmpleadoServicio]
})
export class DialogEmpleadoComponent implements OnInit {
  public titulo = 'Edicion registro de Empleado';
  public empleado: Empleado;
  public empleados: Empleado[] = [];
  constructor(
    private _empleadoServicio: EmpleadoServicio,
    private dialogref: MatDialogRef<DialogEmpleadoComponent>,
    @Inject(MAT_DIALOG_DATA)public editdata: any
  ) {
    
    this.empleado = new Empleado('','','','','','',0,new Date(),1);
   }

  ngOnInit(): void {
    if(this.editdata){
      this.empleado= this.editdata;
    }
    console.log(this.empleado);
  }

  onSubmit(form:any){

  }

  EmpleadoEditado(form :any){
    //console.log(this.editdata);
    this._empleadoServicio.editarEmpleado(this.empleado).subscribe(
      response =>{
        //console.log(response);
        if(response.editado){
          //console.log("entro editado!");
          form.reset();
          this.dialogref.close('Editado');
          this.listaEmpleado();
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
    this.listaEmpleado();
  }

  listaEmpleado(){
    this._empleadoServicio.listaEmpleado().subscribe(
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
