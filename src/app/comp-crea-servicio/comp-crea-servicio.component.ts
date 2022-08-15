import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogGenCreacionComponent } from '../dialog-gen-creacion/dialog-gen-creacion.component';
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
  public genero="Servicio";
  constructor(
    private _servicioServicio: ServicioServicio,
    private dialog:MatDialog
  ) { 
    this.titulo = "Creacion de nuevo servicio";
    this.servicio = new Servicio('','',0,0,1);

  }

  ngOnInit(): void {
  }
  onSubmit(form:any){
    //console.log(this.servicio);
    //var i=1;
    var res="";
    if(this.servicio.hora>60){
      var mod = Math.trunc(this.servicio.hora/60);
      var otherhora = this.servicio.hora-(60*mod);
      
      /* for(let i =0; i <mod; i++){
        console.log("bebop bi dip ba dup");
        console.log(mod);
        
      } */
      if(mod>9){
        
        res+=""+mod;
      }else{
        res+="0"+mod;
      }
      if(otherhora>9){
        res+=":"+otherhora+":00";
      }else{
        res+=":0"+otherhora+":00";
      }
      this.servicio.hora=res;
    }else{
      this.servicio.hora="00:"+this.servicio.hora+":00";
    }
    this._servicioServicio.guardarServicio(this.servicio).subscribe({
      next:(n)=>{
        if(n.servicio){
          form.reset();
          this.dialog.open(DialogGenCreacionComponent,{
            data:this.genero
          });
        }
      },
      error:(e)=>console.log(e)
    });
    //console.log(this.servicio);
    //console.log(res);
  }
}
