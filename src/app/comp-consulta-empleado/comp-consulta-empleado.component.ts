import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../modelos/empleado';
import { EmpleadoServicio } from '../servicios/empleado.servicio';
import { global } from '../servicios/global';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogEmpleadoComponent } from '../dialog-empleado/dialog-empleado.component';
import { DialogEliminarGenComponent } from '../dialog-eliminar-gen/dialog-eliminar-gen.component';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-comp-consulta-empleado',
  templateUrl: './comp-consulta-empleado.component.html',
  styleUrls: ['./comp-consulta-empleado.component.scss'],
  providers: [EmpleadoServicio]
})
export class CompConsultaEmpleadoComponent implements OnInit,AfterViewInit {
  public empleados: Empleado[] = [];
  public test = ['jUAN','TONIO','MOCHO','PEPE'];
  public gen="empleado";
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5,10,15];

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    private _empleadoservicio: EmpleadoServicio,
    private dialog: MatDialog,
    private dialogX:MatDialog
  ) { 
    
  }
  ngAfterViewInit(): void {
    //this.table.renderRows();
  }

  ngOnInit(): void {
    this.listaEmpleado();
  }

  consultaEmpleado(){
    this._empleadoservicio.consultarEmpleado().subscribe(
      response=>{
        
        console.log(response);
      },
      error=>{
        console.log(<any>error)
      }
      
    );
  }

  listaEmpleado(){
    this._empleadoservicio.listaEmpleado().subscribe(
      response=>{
        if(response){
          this.empleados = response.listaEmpleado;
        }
        //console.log(this.empleados);
      },
      error=>{
        console.log(<any>error)
      }
      
    );
  }

  onTableDataChange(event:any){
    this.page = event;
    this.listaEmpleado();
  }

  onTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page = 1;
    this.listaEmpleado();
  }

  openDialog(row :any){
    //console.log(row);
    this.dialog.open(DialogEmpleadoComponent,{
      width:'50%',
      data:row
    });
    
    
  }

  openDialogX(action:string,row:any){
    row.action=action;
    row.generoInvoker='empleado';
    const dialogref=this.dialogX.open(DialogEliminarGenComponent,{
      data:row
    });
    dialogref.afterClosed().subscribe(result =>{
      console.log(result);
      if(result=='Eliminado'){
        console.log('yo gano piece of notcutepie! muahaha');
        this._empleadoservicio.softEliminar(row).subscribe(
          response =>{
            console.log(response);
            //this.table.renderRows();
          },
          error =>{
            console.log(<any>error);
          }
        );
      }
    });
  }
  
}
