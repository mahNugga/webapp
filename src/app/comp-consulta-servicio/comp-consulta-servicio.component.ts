import { Component, OnInit } from '@angular/core';
import { Servicio } from '../modelos/servicio';
import { ServicioServicio } from '../servicios/servicio.servicio';

@Component({
  selector: 'app-comp-consulta-servicio',
  templateUrl: './comp-consulta-servicio.component.html',
  styleUrls: ['./comp-consulta-servicio.component.scss'],
  providers: [ServicioServicio]
})
export class CompConsultaServicioComponent implements OnInit {
  public servicios : Servicio[] = [];

  constructor(
    private _servicioServicio : ServicioServicio
  ) { }

  ngOnInit(): void {
    this.listarServicio();
  }

  listarServicio(){
    this._servicioServicio.listaServicio().subscribe({
      next: (n)=>{
        if(n.listaServicio){
          this.servicios = n.listaServicio;
          console.log(this.servicios);
        }
      },
      error:(e)=> console.log(e)
    });
  }
}
