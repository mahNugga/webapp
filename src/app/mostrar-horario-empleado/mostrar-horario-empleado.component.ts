import { Component, OnInit } from '@angular/core';
import { Horario } from '../modelos/horario';
import { HorarioServicio } from '../servicios/horario.servicio';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogEliminarGenComponent } from '../dialog-eliminar-gen/dialog-eliminar-gen.component';

@Component({
  selector: 'app-mostrar-horario-empleado',
  templateUrl: './mostrar-horario-empleado.component.html',
  styleUrls: ['./mostrar-horario-empleado.component.scss'],
  providers: [HorarioServicio]
})
export class MostrarHorarioEmpleadoComponent implements OnInit {

  displayedColumns:string[] = ['nombre','apellido','rangoinicio','rangofin','horainicio','horafin','estado','Edicion'];
  dataSource!:MatTableDataSource<Horario>;
  public text="row 1";
  public horarios:any;
  constructor(
    private _horarioservicio:HorarioServicio,
    private dialog:MatDialog
  ) {
    this.detalleHorarios();
    
   }

  ngOnInit(): void {
    //this.detalleHorarios();
  }

  detalleHorarios(){
    this._horarioservicio.detalleHorariosCompleto().subscribe({
      next:(n)=>{
        if(n.homerin){
          this.dataSource = n.homerin;
          console.log(this.dataSource);
        }
      }, error:(e)=>console.log(e)
    });
  }

  eliminarUno(info:any){
    console.log(info.id);
    info.generoInvoker='horario';
    const dialogref=this.dialog.open(DialogEliminarGenComponent,{
      data:info
    });
    dialogref.afterClosed().subscribe(result=>{
      if(result=='Eliminado'){
        this._horarioservicio.casiBorraHorario(info.id).subscribe({
          next:(n)=>{
            if(n){
              console.log(n);
              console.log("exitoooo!")
              this.refresh();
            }
          }, error:(e)=>console.log(e)
        });
      }
    });
    
  }

  refresh(){
    this._horarioservicio.detalleHorariosCompleto().subscribe({
      next:(n)=>{
        if(n.homerin){
          this.dataSource = new MatTableDataSource(n.homerin);
          //console.log(this.dataSource);
        }
      }, error:(e)=>console.log(e)
    });
  }

}
