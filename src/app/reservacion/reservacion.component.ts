import { Component, OnInit } from '@angular/core';
import { Horario } from '../modelos/horario';
import { HorarioServicio } from '../servicios/horario.servicio';
import { EmpleadoC } from '../modelos/empleadoC';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.scss'],
  providers: [HorarioServicio]
})
export class ReservacionComponent implements OnInit {

  public horarios!:Horario;
  public fechacomparar:any;
  public logico=1;
  constructor(
    private _horarioServicio:HorarioServicio
  ) { }

  ngOnInit(): void {
  }
  
  fechas(){
    console.log("me lleva la fecha");
    console.log(this.fechacomparar);
    this._horarioServicio.matchHorario(this.fechacomparar).subscribe({
      next:(n)=>{
        if(n.fechin){
          console.log("aqui esta lo chido");
          console.log(n);
          this.horarios=n.fechin;
          this.logico=5;
          console.log(this.horarios);
          console.log(this.logico);
        }
      },
      error:(e)=> console.log(e)
    });
  }
}
