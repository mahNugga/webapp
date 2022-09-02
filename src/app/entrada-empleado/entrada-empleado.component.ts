import { Component, Input, OnInit } from '@angular/core';
import { EmpleadoServicio } from '../servicios/empleado.servicio';
import { ReservacionServicio } from '../servicios/reservacion.servicio';
import { HorarioServicio } from '../servicios/horario.servicio';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Reservaciondb } from '../modelos/reservaciondb';

@Component({
  selector: 'app-entrada-empleado',
  templateUrl: './entrada-empleado.component.html',
  styleUrls: ['./entrada-empleado.component.scss'],
  providers: [EmpleadoServicio,ReservacionServicio,HorarioServicio]
})
export class EntradaEmpleadoComponent implements OnInit {

  public idEmp:any;
  public nombreEmp:string;
  public fechaEmp:Date;
  public piropear =["maravilloso","fantastico","extraordinario","prodigioso","estupendo"];
  public min : number;
  public max: number;
  public indice!:number;
  public neo!:string;
  public fechaMostrar:string;
  public sigTrab:any;
  public horarioEmp:any;
  displayedColumns:string[] =['apellido','fecha','hora','servicio'];
  dataSource!: MatTableDataSource<Reservaciondb>;
  constructor(
    private _empleadoservicio:EmpleadoServicio,
    private _reservaservicio:ReservacionServicio,
    private _horarioservicio:HorarioServicio,
    public activeroute:ActivatedRoute,
    private route:Router
  ) {
    this.fechaEmp = new Date();
    this.nombreEmp = "";
    this.fechaMostrar="";
    this.min = 0;
    this.max = this.piropear.length;
    this.idEmp = this.activeroute.snapshot.queryParamMap.get('id');
    console.log(this.idEmp);
    this.activeroute.queryParamMap.subscribe((data)=>{
      this.idEmp = data.get('id');
    });
   }

  ngOnInit(): void {
    this.neo = this.elegirPiropo(this.min,this.max,this.piropear);
    this.fechaMostrar = this.fechaEmp.toLocaleDateString("es-ES");
    //console.log("ahi van:"+this.fechaEmp+" e indice "+this.indice);
    this.trabajoContEmp(this.idEmp);
    this.cabEmpleado(this.idEmp);
    this.verReservaciones(this.idEmp);
  }

  elegirPiropo(min:number,max:number,piro:any){
    var result= Math.random()*(max-min) +min;
    var  ind = Math.round(result);
    return piro[ind];
  }

  trabajoContEmp(idEmp:any){
    this._reservaservicio.mostrarOneReservaEmp(idEmp).subscribe({
      next:(n)=>{
        this.sigTrab = n.reseNex[0];
        console.log(this.sigTrab);
        console.log(n);
      },error:(e)=>console.log(e)
    });
  }

  verReservaciones(idEmp:any){
    this._reservaservicio.mostrarReservaEmp(idEmp).subscribe({
      next:(n)=>{
        console.log(n);
        if(n.reseTrabajo){
          this.dataSource= n.reseTrabajo;
          //this.route.navigate(['mostrar-reservaempleado'],{state:{reservas:n.reseTrabajo}});
        }
      },error:(e)=>console.log(e)
    });
  }

  verHorarios(idEmp:any){
    this._horarioservicio.mostrarHorarioEmpleado(idEmp).subscribe({
      next:(n)=>{
        if(n.homer){
          this.route.navigate(['mostrar-horariosempleado'],{state:{horarios:n.homer}});
        }
      },error:(e)=>console.log(e)
    });
  }

  cabEmpleado(idEmp:any){
    this._empleadoservicio.credencialesCabEmpleado(idEmp).subscribe({
      next:(n)=>{
        if(n.empeladoCab){
          this.nombreEmp = n.empeladoCab.nombre;
          //console.log("los id son:");
          /* console.log(id);
          console.log(this.id_activo); */
        }
      },error:(e)=>console.log(e)
    });
  }

}
