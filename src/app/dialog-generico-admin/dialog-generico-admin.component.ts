import { Component, OnInit,Inject } from '@angular/core';
import { Servicio } from '../modelos/servicio';
import { ServicioServicio } from '../servicios/servicio.servicio';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteEdita } from '../modelos/clienteEdita';
import { ClienteServicio } from '../servicios/cliente.servicio';

@Component({
  selector: 'app-dialog-generico-admin',
  templateUrl: './dialog-generico-admin.component.html',
  styleUrls: ['./dialog-generico-admin.component.scss'],
  providers:[ServicioServicio,ClienteServicio]
})
export class DialogGenericoAdminComponent implements OnInit {

  public genex:string;
  public servicio:Servicio;
  public cliente:ClienteEdita;
  public tramitador:any;
  public chooseyourdestiny:number=0;
  constructor(
    private _servicioservicio:ServicioServicio,
    private _clienteservicio:ClienteServicio,
    private dialogref:MatDialogRef<DialogGenericoAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public gen:any
  ) { 
    this.genex=gen.generoInvoker;
    this.servicio =gen;
    this.cliente = gen;
    console.log(this.servicio)
    this.servicio.hora="";
  }

  ngOnInit(): void {
    if(this.genex=="servicioAdmin"){
      this.chooseyourdestiny = 1;
    }
    if(this.genex=="mantenimientoCliente"){
      this.chooseyourdestiny = 2;
    }
  }

  ServicioEditado(form:any){
    console.log(form);
    console.log(form.value.hora);
    var horafix =Number(form.value.hora);
    console.log(horafix);
    var res="";
    if(horafix>60){
      var mod = Math.trunc(this.servicio.hora/60);
      var otherhora = this.servicio.hora-(60*mod);
  
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
    console.log(this.servicio.hora);
    console.log(this.servicio);
    this._servicioservicio.editarServicio(this.servicio).subscribe({
      next:(n)=>{
        if(n.ediser){
          console.log("buena flaco");
          this.dialogref.close();
        }
      },error:(e)=>console.log(e)
    });
  }

  clienteEditado(clienteEditForm:any){
    console.log(clienteEditForm);
    console.log(this.cliente);
    this._clienteservicio.mantenimientoCliente(this.cliente).subscribe({
      next:(n)=>{
        if(n){
          console.log("cliente despachado");
        }
      },error:(e)=>console.log(e)
    });
  }
}
