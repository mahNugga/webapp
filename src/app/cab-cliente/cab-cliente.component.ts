import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteServicio } from '../servicios/cliente.servicio';
import { ReservacionServicio } from '../servicios/reservacion.servicio';

@Component({
  selector: 'app-cab-cliente',
  templateUrl: './cab-cliente.component.html',
  styleUrls: ['./cab-cliente.component.scss'],
  providers: [ClienteServicio,ReservacionServicio]
})
export class CabClienteComponent implements OnInit {
  private ruta:any;
  public nombreCab="";
  public cliente_id!:number;
  constructor(
    private route:Router,
    private _clienteServicio: ClienteServicio,
    private _reservaServicio:ReservacionServicio
  ) { 
    this.ruta=this.route.getCurrentNavigation()?.extras?.state?.['id']
    console.log('la ruta de esta es: '+this.ruta);
  }

  ngOnInit(): void {
    this.nombreCabCliente(this.ruta);
    this.cliente_id=this.ruta;
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

  mostrarReserva(id:number){
    this._reservaServicio.mostrarReservaCliente(id).subscribe({
      next:(n)=>{
        this.route.navigate(['reservacion-cliente'],{state:{reserva:n.resecliente}});
      },error:(e)=>console.log(e)
    });
  }

  HastaLaVista(){
    this.route.navigate(['/']);
  }

  irPerfil(id:any){
    this.route.navigate(['perfil-cliente'],{queryParams:{id:id}});
  }
}
