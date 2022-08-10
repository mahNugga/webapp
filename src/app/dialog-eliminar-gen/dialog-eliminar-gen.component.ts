import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-eliminar-gen',
  templateUrl: './dialog-eliminar-gen.component.html',
  styleUrls: ['./dialog-eliminar-gen.component.scss']
})
export class DialogEliminarGenComponent implements OnInit {
  public genex:string;
  constructor(
    private dialogref: MatDialogRef<DialogEliminarGenComponent>,
    @Inject(MAT_DIALOG_DATA) public gen:any
  ) { 
    this.genex=gen.generoInvoker;
    
  }

  ngOnInit(): void {
    console.log(this.gen);
  }

  Eliminator(){
    this.dialogref.close('Eliminado');
  }
}
