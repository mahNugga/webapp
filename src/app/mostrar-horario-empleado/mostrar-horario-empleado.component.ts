import { Component, OnInit } from '@angular/core';
import { Horario } from '../modelos/horario';
import { HorarioServicio } from '../servicios/horario.servicio';
import { MatTableDataSource } from '@angular/material/table';

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
    private _horarioservicio:HorarioServicio
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
    this._horarioservicio.casiBorraHorario(info.id).subscribe({
      next:(n)=>{
        if(n){
          console.log(n);
          console.log("exitoooo!")
        }
      }, error:(e)=>console.log(e)
    });
    
  }

}
