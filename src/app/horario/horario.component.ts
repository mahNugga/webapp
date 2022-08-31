import { Component, OnInit } from '@angular/core';
import { Horario } from '../modelos/horario';
import { HorarioServicio } from '../servicios/horario.servicio';
import { MatDialog } from '@angular/material/dialog';
import { DialogGenCreacionComponent } from '../dialog-gen-creacion/dialog-gen-creacion.component';
import { EmpleadoC } from '../modelos/empleadoC';
import { EmpleadoServicio } from '../servicios/empleado.servicio';
import { formatDate } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss'],
  providers:[HorarioServicio,EmpleadoServicio]
})
export class HorarioComponent implements OnInit {

  displayedColumns:string[] = ['seleccion','nombre','rangoinicio','rangofin','horainicio','horafin'];
  dataSource!:MatTableDataSource<Horario>;
  public text="row 1";
  public horarios:any;
  public empleados: EmpleadoC[]=[];
  public titulo:string;
  public horario:Horario;
  public genero="Horario";
  public horarioComplx!:any;
  public potter:boolean = false;
  public voldemort:boolean = true;
  public horario_id:any;
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
    if(this.voldemort==false){
      this._horarioServicio.actualizaGuardaHorario(this.horario,this.horario_id).subscribe({
        next:(n)=>{
          if(n){
            console.log(n);
            form.reset();
            this.dialog.open(DialogGenCreacionComponent,{
              data:this.genero
            });
            this.potter = false;
          }
        }, error:(e)=>console.log(e)
      });
    }else{
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

  VamoPerroh(event:any):void{
    console.log("My dog counts with me!");
    let val = event.target.value;
    //console.log(val);
    let vaal = val.split(':');
    //console.log(vaal);
    let gab = vaal[1];
    console.log(gab);
    //console.log(typeof(gab));
    this._horarioServicio.mostrarHorarioEmpleado(gab).subscribe({
      next:(n)=>{
        if(n.homer.length>0){
          this.horarioComplx = n.homer;
          console.log(this.horarioComplx);
          this.dataSource = this.horarioComplx;
          this.potter = true;
          
        }else{
          console.log("cawuabonga!");
          this.potter = false;
        }
      },error:(e)=>console.log(e)
    });

  }

  Actualizer(){
    this.voldemort=false;
  }

  Prueba(info:any){
    this.horario_id = info;
    console.log("param id:"+info);
    console.log(this.horario_id);
  }
}
