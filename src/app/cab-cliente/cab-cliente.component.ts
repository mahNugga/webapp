import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteServicio } from '../servicios/cliente.servicio';

@Component({
  selector: 'app-cab-cliente',
  templateUrl: './cab-cliente.component.html',
  styleUrls: ['./cab-cliente.component.scss'],
  providers: [ClienteServicio]
})
export class CabClienteComponent implements OnInit {
  private ruta:any;
  public nombreCab="";
  constructor(
    private route:Router,
    private _clienteServicio: ClienteServicio
  ) { 
    this.ruta=this.route.getCurrentNavigation()?.extras?.state?.['id']
    //console.log(this.ruta);
  }

  ngOnInit(): void {
    this.nombreCabCliente(this.ruta);
    //console.log("mmmmmmm");
  }

  nombreCabCliente(ruta:any){
    //console.log("entrando");
    console.log(ruta);
    this._clienteServicio.seleccionarNombreCab(ruta).subscribe({
      next: (n)=>{
        console.log(n);
        if(n.clienteBasic){
          this.nombreCab = n.clienteBasic.nombre+" "+n.clienteBasic.apellido;
          //console.log(n);
          //console.log(this.nombreCab);
        }
      },
      error: (e)=>console.log(e)
    });
  }

}
