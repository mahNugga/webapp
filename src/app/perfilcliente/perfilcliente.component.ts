import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from '../modelos/cliente';
import { ClienteServicio } from '../servicios/cliente.servicio';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreacionGenericoComponent } from '../dialog-creacion-generico/dialog-creacion-generico.component';

@Component({
  selector: 'app-perfilcliente',
  templateUrl: './perfilcliente.component.html',
  styleUrls: ['./perfilcliente.component.scss'],
  providers:[ClienteServicio]
})
export class PerfilclienteComponent implements OnInit {

  displayedColumns:string[] =['nombre','apellido','correo','telefono','direccion','Edicion'];
  dataSource!: MatTableDataSource<Cliente>;
  public identificadorDiv:number=0;
  public cliente_id:any;
  public datosCli:any;
  public genCli="edicionCliente";
  constructor(
    private _location:Location,
    private _clienteservicio:ClienteServicio,
    private activeroute:ActivatedRoute,
    private dialog:MatDialog
  ) {
      this.cliente_id = this.activeroute.snapshot.queryParamMap.get('id');
      this.activeroute.queryParamMap.subscribe((data)=>{
        this.cliente_id = data.get('id');
      });
   }

  ngOnInit(): void {
  }
  volver(){
    this._location.back();
  }

  actualizaDatos(cliente_id:any){
    this.identificadorDiv = 1 ;
    this._clienteservicio.detalleDatosCliente(cliente_id).subscribe({
      next:(n)=>{
        if(n.datosCli){
          this.dataSource = n.datosCli;
        }
      },error:(e)=>console.log(e)
    });

  }

  ActualizarDatos(info:any){
    console.log(info);
    info.generoInvoker = this.genCli;
    info.id = this.cliente_id;
    this.dialog.open(DialogCreacionGenericoComponent,{
      data:info
    });
  }

  cambiaCareta(info:any){
    this.identificadorDiv = 2;
    

  }
  subeCareta(info:any){
    console.log(info);
    var infoplus ={};
    var genero = "fotocliente";
    var generoInvoker = genero;
    var id = this.cliente_id;
    infoplus = {id:id,generoInvoker:genero};
    console.log(infoplus);
    this.dialog.open(DialogCreacionGenericoComponent,{
      data:infoplus
    });
  }

  sanchoPanza(){
    this.identificadorDiv = 3;
  }

  cambiaContra(id:any){
    var genero='contra';
    var infoplus = {id:id,generoInvoker:genero};
    this.dialog.open(DialogCreacionGenericoComponent,{
      data:infoplus
    });
  }
}
