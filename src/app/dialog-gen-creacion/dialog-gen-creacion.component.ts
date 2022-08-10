import { Component, OnInit, Input, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrearEmpleadoComponent } from '../crear-empleado/crear-empleado.component';
@Component({
  selector: 'app-dialog-gen-creacion',
  templateUrl: './dialog-gen-creacion.component.html',
  styleUrls: ['./dialog-gen-creacion.component.scss']
})
export class DialogGenCreacionComponent implements OnInit {
  @Input() generoPantalla!:CrearEmpleadoComponent;
  @Input('genero')generoPrint!: string;
  public generox:string;
  //gen:string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public gen:any
  ) { 
    this.generox=this.gen;
  }

  ngOnInit(): void {
    
  }

}
