import { Component, OnInit } from '@angular/core';
import { Horario } from '../modelos/horario';
import { HorarioServicio } from '../servicios/horario.servicio';
import { MatDialog } from '@angular/material/dialog';
import { DialogGenCreacionComponent } from '../dialog-gen-creacion/dialog-gen-creacion.component';
import { EmpleadoC } from '../modelos/empleadoC';
import { EmpleadoServicio } from '../servicios/empleado.servicio';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss'],
  providers:[HorarioServicio,EmpleadoServicio]
})
export class HorarioComponent implements OnInit {

  public empleados: EmpleadoC[]=[];
  public titulo:string;
  public horario:Horario;
  public genero="Horario";

  constructor(
    private _horarioServicio: HorarioServicio,
    private _empleadoServicio:EmpleadoServicio,
    private dialog:MatDialog
  ) { 
    this.titulo="Registrar nuevo horario para determinado empleado(s)";
    this.horario = new Horario('','',new Date(),new Date(),new Date(),0,'',1,-1);
  }

  ngOnInit(): void {
    this.listaEmpleado();
    console.log(this.empleados);
    console.log(this.horario);
  }

  onSubmit(form:any){
    console.log(form);
    var variant=formatDate(this.horario.rango_fin,'yyyy-MM-dd hh:mm:ss z','en-US'); 
    this.horario.rango_fin=variant;
    console.log(this.horario);
    this._horarioServicio.guardarHorario(this.horario).subscribe(
      {
        next: (n)=>{if(n.horario){
          form.reset();
          this.dialog.open(DialogGenCreacionComponent,{
            data:this.genero
          });
        }},
        error:(e)=> console.log(e)
      }
    );  
  }

  listaEmpleado(){
    this._empleadoServicio.listarNoadmins().subscribe(
      response=>{
        if(response){
          this.empleados = response.listaSinrangos7;
        }
        //console.log(this.empleados);
      },
      error=>{
        console.log(<any>error)
      });
  }
}
