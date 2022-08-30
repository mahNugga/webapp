import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservaciondb } from '../modelos/reservaciondb';
import { ReservacionServicio } from '../servicios/reservacion.servicio';
import { MatDialog } from '@angular/material/dialog';
import { DialogGenCreacionComponent } from '../dialog-gen-creacion/dialog-gen-creacion.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reserva-confirmacion',
  templateUrl: './reserva-confirmacion.component.html',
  styleUrls: ['./reserva-confirmacion.component.scss'],
  providers: [ReservacionServicio]
})
export class ReservaConfirmacionComponent implements OnInit {

  public extras:any;
  public reservacion:Reservaciondb;
  public idretorno:any;
  public genero = "Reservacion";
  constructor(
    private _ruta:Router,
    private _reservarservicio:ReservacionServicio,
    private dialog:MatDialog,
    
  ) { 
    this.extras=this._ruta.getCurrentNavigation()?.extras.state?.['re'];
    this.reservacion = new Reservaciondb('','','mensaje:',0,this.extras.horaseleccion,0,0,12,0,new Date(),this.extras.servicio_id,this.extras.empleado_id,this.extras.cliente_id);
    this.idretorno =  this.extras.cliente_id;
  }

  ngOnInit(): void {
  }
  reservar(){
    this.reservacion.total= this.extras.total;
    this.reservacion.fechaseleccion= this.extras.fechasleccion;
    this._reservarservicio.reservarReservacion(this.reservacion).subscribe({
      next:(n)=>{
        if(n.reserva){
          const dialogref = this.dialog.open(DialogGenCreacionComponent,{
            data:this.genero
          }); 
          dialogref.afterClosed().subscribe(result=>{
            console.log(result);  
            if(result=='Reservacion'){
              this._ruta.navigate(['principal-cliente'],{state:{id:this.idretorno}});
            }
          });
          //this.dialogref.afterOpened()
        }
        this.dialog.afterAllClosed
      },error:(e)=>console.log(e)

    });
  }

  cancelarReserva(){
    this._ruta.navigate(['principal-cliente'],{state:{id:this.idretorno}});
  }
}
