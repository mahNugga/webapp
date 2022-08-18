import { Component, ElementRef, OnInit } from '@angular/core';
import { Horario } from '../modelos/horario';
import { HorarioServicio } from '../servicios/horario.servicio';
import { EmpleadoC } from '../modelos/empleadoC';
import { Router } from '@angular/router';
import { Reservacion } from '../modelos/reservacion';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.scss'],
  providers: [HorarioServicio]
})
export class ReservacionComponent implements OnInit {

  public horarios!:Horario;
  public fechacomparar:any;
  public logico=false;
  public elegido:any=[];
  public horaNeo: any;
  public iniciohoraTabla:string='';
  public finhoraTabla:string='';
  public status=false;
  public extras:any;
  public reserva:Reservacion;
  constructor(
    private _horarioServicio:HorarioServicio,
    private elf:ElementRef,
    private _ruta:Router
  ) { 
    this.extras=this._ruta.getCurrentNavigation()?.extras.state?.['serv'];
    console.log('esto viene desde entrada cliente: '+this.extras);
    console.log(this.extras);
    this.reserva = new Reservacion('',0,0,0,-1,0,-1,new Date(),0,1);
  }

  ngOnInit(): void {
    
  }
  
  fechas(){
    //console.log("me lleva la fecha");
    console.log(this.fechacomparar);
    this.reserva.fechasleccion=this.fechacomparar;
    this._horarioServicio.matchHorario(this.fechacomparar).subscribe({
      next:(n)=>{
        if(n.fechin){
          var arreglo=[];
          var index=0;
          var secure;
          this.elegido=[];
          console.log("aqui esta lo chido");
          console.log(n);
          this.horarios=n.fechin;
          this.logico=true;
          arreglo=n.fechin;
          console.log(this.horarios);
          console.log(this.logico);
          arreglo.forEach((element: any) => {
            console.log(element)
            if(element.hora_inicio=='10:00:00' && element.hora_fin=='19:00:00'){
              console.log("yehaaaaaaaaaaa!");
              this.iniciohoraTabla=element.hora_inicio;
              this.iniciohoraTabla = this.iniciohoraTabla.slice(0,2);
              this.finhoraTabla = element.hora_fin;
              this.finhoraTabla = this.finhoraTabla.slice(0,2);
            }if(element.hora_inicio=='10:00:00'){
              this.iniciohoraTabla = element.hora_inicio;
              this.iniciohoraTabla = this.iniciohoraTabla.slice(0,2);
              this.finhoraTabla = element.hora_fin;
              this.finhoraTabla = this.finhoraTabla.slice(0,2);
            }
            console.log(this.iniciohoraTabla+' -hasta- '+this.finhoraTabla);
            
            
          });
          console.log(arreglo.length);
          if(arreglo.length>0){
            console.log('buggyman');
            index = <number><unknown>this.finhoraTabla - <number><unknown>this.iniciohoraTabla;
            console.log(index);
            var horas=parseInt(this.iniciohoraTabla);
            for(var i=0;i<index;i++){
              this.elegido[i]=horas;
              horas+=1;
            }
          }else{
            this.elegido=[];
          }
          console.log(this.elegido);
        }
      },
      error:(e)=> console.log(e)
    });
    
  }

  elejirHora(hora:any){
    console.log("ha elejido: "+hora);
    this.status=!this.status;
    var buscado='a'+hora;
    this.horaNeo=hora;
    //var tds =this.elf.nativeElement.getElementById(buscado);
    //console.log(tds);
    var op = document.getElementById(buscado);
    console.log(op);
    if(this.status==true){
      op?.setAttribute('style','background-color:red;');
    }
    if(this.status==false){
      op?.setAttribute('style','background-color:white;');
    }
  }
  
  confirmarReserva(){
    this.reserva.horaseleccion=this.horaNeo;
    this.reserva.servicio=this.extras.nombre;
    this.reserva.duracion=this.extras.hora;
    this.reserva.precio=this.extras.precio;
    this.reserva.total=(this.extras.precio*0.12)+this.extras.precio;
    console.log(this.reserva);
    this._ruta.navigate(['confirmar-reserva'],{state:{re:this.reserva}});
  }
}
