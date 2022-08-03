import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../modelos/empleado';
import { EmpleadoServicio } from '../servicios/empleado.servicio';
import { global } from '../servicios/global';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogEmpleadoComponent } from '../dialog-empleado/dialog-empleado.component';

@Component({
  selector: 'app-comp-consulta-empleado',
  templateUrl: './comp-consulta-empleado.component.html',
  styleUrls: ['./comp-consulta-empleado.component.scss'],
  providers: [EmpleadoServicio]
})
export class CompConsultaEmpleadoComponent implements OnInit {
  public empleados: Empleado[] = [];
  public test = ['jUAN','TONIO','MOCHO','PEPE'];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5,10,15];
  constructor(
    private _empleadoservicio: EmpleadoServicio,
    private dialog: MatDialog
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

  onTableDataChange(event:any){
    this.page = event;
    this.listaEmpleado();
  }

  onTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page = 1;
    this.listaEmpleado();
  }

  openDialog(){
    this.dialog.open(DialogEmpleadoComponent,{
      width: '50%',
      height: '50%'
    } 
    );
  }
}
