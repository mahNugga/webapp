import { Component, ElementRef, OnInit } from '@angular/core';
import { Horario } from '../modelos/horario';
import { HorarioServicio } from '../servicios/horario.servicio';
import { EmpleadoC } from '../modelos/empleadoC';
import { Router } from '@angular/router';
import { Reservacion } from '../modelos/reservacion';
import { Location } from '@angular/common';
import { ReservacionServicio } from '../servicios/reservacion.servicio';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.scss'],
  providers: [HorarioServicio,ReservacionServicio]
})
export class ReservacionComponent implements OnInit {

  public horarios!:Horario;
  public fechacomparar:any;
  public fechaActual:Date = new Date();
  public fechahoy:any;
  public diff:any;
  public fechahoyFull:any;
  public logico=false;
  public elegido:any=[];
  public horaNeo: any;
  public iniciohoraTabla:string='';
  public finhoraTabla:string='';
  public empleado_id!:number;
  public status=false;
  public extras:any;
  public cliente_id:number;
  public reserva:Reservacion;
  public empleados!:any;
  public thor:boolean=false;
  public libre!:boolean;
  public arregloHorasDisp: any=[];
  public ultimostatusIpromise:number=0;
  public rambo:boolean=false;
  constructor(
    private _horarioServicio:HorarioServicio,
    private _reservaservicio:ReservacionServicio,
    private elf:ElementRef,
    private _ruta:Router,
    private _location:Location
  ) { 
    this.extras=this._ruta.getCurrentNavigation()?.extras.state?.['serv'];
    this.cliente_id = this._ruta.getCurrentNavigation()?.extras.state?.['id'];
    console.log('esto viene desde entrada cliente: '+this.extras);
    console.log(this.extras);
    this.reserva = new Reservacion('',0,0,0,-1,0,-1,new Date(),0,1,-1);
  }

  ngOnInit(): void {
    
  }
  
  fechas(){
    this.empleados=[];
    console.log("reset: "+this.empleados);
    this.thor=false;
    this.rambo=false;
    this.arregloHorasDisp=[];
    //console.log("me lleva la fecha");
    var comparaesta = new Date(this.fechacomparar);
    //(this.fechacomparar)as Date;
    //var fechafixelegida = this.fechacomparar.toLocaleDateString("es-ES")
    //var fechafixcomparar = comparaesta.toLocaleDateString("es-ES");
    /* console.log(this.fechacomparar);
    console.log(comparaesta); */
    //console.log(fechafixcomparar);
    this.fechahoyFull = this.fechaActual;
    this.fechahoy = this.fechaActual.toLocaleDateString("es-ES");
    //var fechasuperhoy = new Date(this.fechahoy);
    /* this.fechaActual.setHours(0,0,0,0);
    comparaesta.setHours(0,0,0,0); */
    //console.log(this.fechahoy);
    //console.log(comparaesta.getDay());
    //console.log(fechasuperhoy.getDay());
    this.reserva.fechasleccion=this.fechacomparar;
    this.diff = (this.fechaActual.getTime() - comparaesta.getTime())/100000;
    console.log("la diferencia es "+this.diff);
    //console.log(comparaesta);
    /* if( fechafixcomparar < this.fechahoy){
      console.log(" ya paso y no va a pasar");
      
      this.ultimostatusIpromise=2;
    }
    if(fechafixcomparar>=this.fechahoy){
      console.log("denuevo por aqui");
    } */
    /* if(this.fechacomparar=== this.fechahoy || this.fechacomparar > this.fechahoy){
      console.log("mucho mejor ronaldinho");
      this.ultimostatusIpromise=1;
    } */
    if(this.diff<1100){
      this.ultimostatusIpromise = 1;
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
            this.empleados = n.fechin;
            arreglo.forEach((element: any) => {
              console.log(element)
              if(element.hora_inicio=='10:00:00' && element.hora_fin=='19:00:00'){
                console.log("yehaaaaaaaaaaa!");
                this.iniciohoraTabla=element.hora_inicio;
                this.iniciohoraTabla = this.iniciohoraTabla.slice(0,2);
                this.finhoraTabla = element.hora_fin;
                this.finhoraTabla = this.finhoraTabla.slice(0,2);
                this.empleado_id = element.empleado_id; 
              }if(element.hora_inicio=='10:00:00'){
                this.iniciohoraTabla = element.hora_inicio;
                this.iniciohoraTabla = this.iniciohoraTabla.slice(0,2);
                this.finhoraTabla = element.hora_fin;
                this.finhoraTabla = this.finhoraTabla.slice(0,2);
                this.empleado_id = element.empleado_id; 
              }if(element.hora_inicio=='09:00:00'){
                this.iniciohoraTabla = element.hora_inicio;
                this.iniciohoraTabla = this.iniciohoraTabla.slice(0,2);
                this.finhoraTabla = element.hora_fin;
                this.finhoraTabla = this.finhoraTabla.slice(0,2);
                this.empleado_id = element.empleado_id; 
              }
              console.log(this.iniciohoraTabla+' -hasta- '+this.finhoraTabla);
              
              
            });
            console.log(arreglo.length);
            if(arreglo.length>0){
              console.log('buggyman');
              index = <number><unknown>this.finhoraTabla - <number><unknown>this.iniciohoraTabla;
              //console.log(index);
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
    if(this.diff>1300){
      this.ultimostatusIpromise = 2;
    }
    
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

  elejirEmp(empneo:any){
    console.log(empneo);
    this.thor = true;
    this.status=false;
    var removedor = document.querySelector("lostds");
    removedor?.classList.remove("elegido:disabled");
    removedor?.classList.add("nada");
    //let emp = empneo;
    //this.horaNeo=empneo
    this.rambo=false;
    /* console.log(this.fechaActual);
    console.log(this.fechahoy); */
    let lehourActual = this.fechahoyFull.getHours();
    let leminute = this.fechahoyFull.getMinutes();
    console.log(leminute);
    //this.fechahoy = this.fechaActual.toLocaleDateString("es-Es");
    console.log(this.fechahoy);
    this._reservaservicio.buscaFechaExiste(this.fechacomparar,empneo.empleado_id).subscribe({
      next:(n)=>{
        if(n.ganador){
          console.log("yooooooooooo");
          console.log(n.ganador);
        }
        if(n.ganador<1){
          console.log("heregoagain");
          //this.libre=true;
          /* console.log('inicio '+this.iniciohoraTabla+'empneoinicio '+empneo.hora_inicio);
          console.log('fin '+this.finhoraTabla+'empneofin '+empneo.hora_fin); */
          let horafixinico = empneo.hora_inicio.slice(0,2);
          let horafixfin = empneo.hora_fin.slice(0,2);
          console.log(horafixinico);
          let pruebafecha = new Date(this.fechacomparar);
          let pruebafechaAnother = pruebafecha.toLocaleDateString("en-EN");
          let pruebaspanol = pruebafecha.toLocaleDateString("es-ES");
          let pruebafechahoy = new Date(this.fechahoy); 
          let pruebafechahoyconvert = pruebafechahoy.toLocaleDateString("es-ES");
          lehourActual = lehourActual;
          let opcion;
          /* console.log(this.fechaActual);
          console.log(lehourActual);
          console.log(this.fechacomparar);
          console.log(this.fechahoy); */
          /* console.log(pruebafechaAnother);
          console.log(pruebaspanol); */
          //console.log(pruebafechahoyconvert);
          if(this.diff<0){
            console.log("hoy no se trabaja");
            opcion="mayor";
            this.creaArreglodeHorasDisponibles(lehourActual,leminute,horafixinico,horafixfin,opcion);
          }
          if(this.diff<1100 && this.diff>1){
            console.log("hoy se camella");
            opcion="igual";
            this.creaArreglodeHorasDisponibles(lehourActual,leminute,horafixinico,horafixfin,opcion);
          }
          if(this.diff>1299){
            console.log("eso no esta dentro de los parametros rik");
          }
          /* if(this.fechacomparar!=pruebafechahoyconvert){
            console.log("no es hoy repito, no es hoy"); */
            /* if(lehourActual< horafixinico){ */
              /* console.log("con if funka y es horario completo de opciones"+lehourActual);
              opcion = 'igual';
              this.creaArreglodeHorasDisponibles(lehourActual,horafixinico,horafixfin,opcion); */
            
          /* }else{
            if(lehourActual< horafixinico){
              console.log("con if funka y es horario completo de opciones"+lehourActual);
              opcion = 'igual';
              this.creaArreglodeHorasDisponibles(lehourActual,horafixinico,horafixfin,opcion);
            }
            if(lehourActual >= horafixinico && lehourActual < Number(horafixfin)){
              console.log("ya es un arreglo con menos opciones"+lehourActual);
              opcion = 'mayor'
              this.creaArreglodeHorasDisponibles(lehourActual,horafixinico,horafixfin,opcion);
            } */
            /* if(lehourActual < Number(horafixinico)){
              console.log("otro horario con todas las opciones"+lehourActual);
              this.creaArreglodeHorasDisponibles(lehourActual,horafixinico,horafixfin,opcion);
            } */
            /* if(lehourActual >= horafixfin){
              console.log("vuelva mañana guachin"+lehourActual); */
              //this.creaArreglodeHorasDisponibles(lehourActual,empneo.hora_inicio,this.finhoraTabla);
            /* }
          } */
          
            /* switch(this.diff){
              case this.diff<0: console.log("No es hoy ni ayer "+lehourActual);
                break;
              case this.diff<1100:console.log("es hoy meme "+lehourActual);
                break;
              case this.diff>1299:console.log("es el pasado Marty! "+lehourActual);
                break;
            } */
          
        }else{
          this.libre=false
        }
      }, error:(e)=>console.log(e)
    });
     var buscarele = "#tableh";
     var elementoTabla = document.getElementById("#tableh") as HTMLButtonElement;
     //elementoTabla.disabled=true;
    /* if(this.libre==true){
      let lehourActual = this.fechaActual.getHours();
      lehourActual+2;
      console.log(lehourActual);
      if(lehourActual== Number(this.iniciohoraTabla)){
        console.log("con if funka");
      }
        switch(lehourActual){
          case Number(this.iniciohoraTabla): console.log("hay something aqui"+lehourActual);
              break;
          case Number(this.iniciohoraTabla):
        }
    }else{
      console.log("mmmmmmmm ups");
    }
 */
  }

  creaArreglodeHorasDisponibles(hora:any,minuti:any,horaentrada:any,horasalid:any,op:string){
    this.arregloHorasDisp=[];
    /* console.log("la hora que viene: "+hora);
    console.log("la horaentrada que viene: "+horaentrada);
    console.log("la horasalida que viene: "+horasalid); */
    let indic=0;
    let iniciobucle =  Number(horaentrada);//(horasalid - indic);
    horasalid = Number(horasalid);
    console.log("inicio de arreglo:"+iniciobucle);
    if(op=='igual'){
      /* let caritomehabloenIngles = hora/60 */
      if(hora>=horaentrada && minuti>1){
        iniciobucle= hora+1;
        console.log("daleeeeee guacho")
        indic= (horasalid - (hora+1));
      }
      
      //console.log("la hora indice:"+indic);
      for(let i=0; i<indic;i++){
        this.arregloHorasDisp[i]=iniciobucle;
        iniciobucle++;
      }

    }else{
      if(horaentrada>hora){
        iniciobucle = horaentrada
      }else{
        iniciobucle =hora;
      }
      indic = (horasalid - hora);
      /* console.log("la hora indice:"+indic);
      console.log('la resta '+(horasalid - horaentrada)); */
      for(let i=0; i<indic;i++){
        this.arregloHorasDisp[i]=iniciobucle;
        iniciobucle++;
      }
    }
    
    console.log(this.arregloHorasDisp);
  }
  
  confirmarReserva(){
    this.reserva.horaseleccion=this.horaNeo;
    this.reserva.servicio=this.extras.nombre;
    this.reserva.duracion=this.extras.hora;
    this.reserva.precio=this.extras.precio;
    this.reserva.total=(this.extras.precio*0.12)+this.extras.precio;
    this.reserva.empleado_id = this.empleado_id;
    this.reserva.cliente_id = this.cliente_id;
    this.reserva.servicio_id = this.extras.id;
    console.log(this.reserva);
    this._ruta.navigate(['confirmar-reserva'],{state:{re:this.reserva}});
  }

  procedeReserva(info:any){
    console.log(info);
    let i=0;
    this.rambo=true;
    this.horaNeo=info;
    /* arreglo.length;
    for(i=0;i<arreglo.length;i++){
      if(i!=info){
        arreglo[i].innerHTML="";
      }
    } */
    //var op = (document.getElementById(info)as any).disabled=true;
    var op = document.getElementById(info);
    console.log(op);
    //if(this.status==true){
    //op!.innerHTML="";
    //}
    op?.setAttribute('style','background-color:red;');
    op!.innerHTML=this.extras.nombre;
    this.status=!this.status;
    if(this.status==false){
      op?.setAttribute('style','background-color:white;');
      op!.innerHTML="";
    }
    var tds = (document.querySelectorAll('lostds') as unknown as HTMLInputElement);
    tds.disabled=true;
  }

  cancelarReserva(){
    this._location.back();
  }

  volver(){
    this._location.back();
  }
}  
 