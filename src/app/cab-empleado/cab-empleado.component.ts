import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoC } from '../modelos/empleadoC';
import { EmpleadoServicio } from '../servicios/empleado.servicio';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cab-empleado',
  templateUrl: './cab-empleado.component.html',
  styleUrls: ['./cab-empleado.component.scss'],
  providers:[EmpleadoServicio]
})
export class CabEmpleadoComponent implements OnInit {

  public ruta:any;
  public nombreCab="";
  public intercambio!:string;
  id:any;
  id_activo:any;
  constructor(
    private route:Router,
    private _empleadoservicio:EmpleadoServicio,
    public activeroute:ActivatedRoute
  ) {
    this.id = this.activeroute.snapshot.queryParamMap.get('id');
    console.log(this.id);
    this.activeroute.queryParamMap.subscribe((data)=>{
      this.id_activo = data.get('id');
    });
   }

  ngOnInit(): void {
    this.cabEmpleado(this.id);
  }

  cabEmpleado(id:number){
    this._empleadoservicio.credencialesCabEmpleado(id).subscribe({
      next:(n)=>{
        if(n.empeladoCab){
          this.nombreCab = n.empeladoCab.apellido+" "+n.empeladoCab.nombre;
          this.intercambio = n.empeladoCab.nombre;
          this.id = n.empeladoCab.id;
          console.log("los id son:");
          console.log(id);
          console.log(this.id_activo);
        }
      },error:(e)=>console.log(e)
    });
  }

  HastaLaVista(){
    this.route.navigate(['/']);
  }

}
