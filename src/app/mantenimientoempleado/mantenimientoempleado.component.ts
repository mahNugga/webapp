import { Component, OnInit } from '@angular/core';
import { EmpleadoC } from '../modelos/empleadoC';
import { MatTableDataSource } from '@angular/material/table';
import { EmpleadoServicio } from '../servicios/empleado.servicio';
import { MatDialog } from '@angular/material/dialog';
import { DialogEliminarGenComponent } from '../dialog-eliminar-gen/dialog-eliminar-gen.component';

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
    private _empleadoservicio:EmpleadoServicio,
    private dialog:MatDialog
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

  hastaLaVista(row:any){
    row.generoInvoker='Empleado';
    const dialogref = this.dialog.open(DialogEliminarGenComponent,{
      data:row
    });
    dialogref.afterClosed().subscribe(res=>{
      if(res=='Eliminado'){
        this._empleadoservicio.eliminarPermanenteEmpleado(row.id).subscribe({
          next:(n)=>{
            this.refresh();
          },error:(e)=> console.log(e)
        });
      }
    });
  }

  refresh(){
    this._empleadoservicio.sudoListaEmpleados().subscribe({
      next:(n)=>{
        if(n.listaEmpleado){
          this.dataSource = new MatTableDataSource(n.listaEmpleado);
        }
      }, error:(e)=>console.log(e)
    });
  }
}
