import { Component, OnInit } from '@angular/core';
import { Servicio } from '../modelos/servicio';
import { ServicioServicio } from '../servicios/servicio.servicio';
import { MatDialog } from '@angular/material/dialog';
import { DialogGenericoAdminComponent } from '../dialog-generico-admin/dialog-generico-admin.component';

@Component({
  selector: 'app-comp-consulta-servicio',
  templateUrl: './comp-consulta-servicio.component.html',
  styleUrls: ['./comp-consulta-servicio.component.scss'],
  providers: [ServicioServicio]
})
export class CompConsultaServicioComponent implements OnInit {
  public servicios : Servicio[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5,10,15];
  public genero="servicioAdmin";
  constructor(
    private _servicioServicio : ServicioServicio,
    private dialog:MatDialog
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

  onTableDataChange(event:any){
    this.page = event;
    this.listarServicio();
  }

  onTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page = 1;
    //this.listaEmpleado();
  }

  editaServicio(servicio:any){
    servicio.generoInvoker = this.genero;
    console.log(servicio);
    this.dialog.open(DialogGenericoAdminComponent,{
      width:'40%',
      minHeight:'400px',
      data:servicio
    });
  }
}
