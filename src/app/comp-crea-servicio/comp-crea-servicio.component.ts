import { Component, OnInit } from '@angular/core';
import { Servicio } from '../modelos/servicio';
import { ServicioServicio } from '../servicios/servicio.servicio';

@Component({
  selector: 'app-comp-crea-servicio',
  templateUrl: './comp-crea-servicio.component.html',
  styleUrls: ['./comp-crea-servicio.component.scss'],
  providers:[ServicioServicio]
})
export class CompCreaServicioComponent implements OnInit {
  public titulo:string;
  public servicio: Servicio;
  public status!: string;
  constructor(
    private _servicioServicio: ServicioServicio
  ) { 
    this.titulo = "Creacion de nuevo servicio";
    this.servicio = new Servicio('','',1,0,1);

  }

  ngOnInit(): void {
  }
  onSubmit(form:any){
    console.log(this.servicio);
    this._servicioServicio.guardarServicio(this.servicio).subscribe(
      response =>{
        console.log(response.servicio);
        if(response){
          console.log("nuevo servicio ha sido success");
          this.status = 'success';
          form.reset();
        }else{
          this.status='fail';
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
}
