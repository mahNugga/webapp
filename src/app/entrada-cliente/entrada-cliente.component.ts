import { Component, OnInit } from '@angular/core';
import { Servicio } from '../modelos/servicio';
import { ServicioServicio } from '../servicios/servicio.servicio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrada-cliente',
  templateUrl: './entrada-cliente.component.html',
  styleUrls: ['./entrada-cliente.component.scss'],
  providers: [ServicioServicio]
})
export class EntradaClienteComponent implements OnInit {
  public servicios : Servicio[]= [];
  public losdiv=[];
  public cliente_id!:number;
  constructor(
    private _servicioServicio : ServicioServicio,
    private _router:Router
  ) {
      this.cliente_id = this._router.getCurrentNavigation()?.extras?.state?.['id']
      
   }

  ngOnInit(): void {
    this.listarServicio();
    //console.log(this.servicios);
    //this.losdiv = this.servicios.length;
    //console.log(this.losdiv);
  }

  listarServicio(){
    this._servicioServicio.listaServicio().subscribe({
      next: (n)=>{
        //console.log(n);
        if(n.listaServicio){
          this.servicios = n.listaServicio;
          this.losdiv= n.listaServicio.length;
          console.log(this.losdiv);
          console.log(this.servicios);
        }
      },
      error:(e)=> console.log(e)
    });
  }

  reservar(servicioprocesado:Servicio){
    console.log(servicioprocesado);
    var param = servicioprocesado;
    this._router.navigate(['/reservar'],{state:{serv:servicioprocesado,id:this.cliente_id}});
  }

}
