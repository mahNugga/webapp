import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteEdicion } from '../modelos/clienteActualizar';
import { ClienteServicio } from '../servicios/cliente.servicio';

@Component({
  selector: 'app-dialog-creacion-generico',
  templateUrl: './dialog-creacion-generico.component.html',
  styleUrls: ['./dialog-creacion-generico.component.scss'],
  providers: [ClienteServicio]
})
export class DialogCreacionGenericoComponent implements OnInit {

  public genex:string;
  public cliente:ClienteEdicion;
  public cliente_id:any;
  public ruletacriolla:number=0;
  constructor(
    private _serviciocliente:ClienteServicio,
    @Inject(MAT_DIALOG_DATA) public gen:any
  ) { 
    this.genex=gen.generoInvoker;
    this.cliente = new ClienteEdicion('','','','','');
    this.cliente_id = gen.id;
    console.log(gen);
    this.cliente = gen;
  }

  ngOnInit(): void {
    this.establecerVista(this.genex);
  }

  establecerVista(genex:any){
    this.ruletacriolla = 0;
    console.log(genex);
    if(genex=="edicionCliente"){
      this.ruletacriolla = 1;
    }
    if(genex=="fotocliente"){
      this.ruletacriolla = 2;
    }
    if(genex=="contra"){
      this.ruletacriolla = 3;
    }
  }

  guardaCambios(form:any,id:any){
   console.log("aqui vamos guacho"); 
   console.log(id);
   this._serviciocliente.actualizaDatosCliente(this.cliente,id).subscribe({
    next:(n)=>{
      if(n){
        form.reset();
      }
    }, error:(e)=>console.log(e)
   });
  }
}
