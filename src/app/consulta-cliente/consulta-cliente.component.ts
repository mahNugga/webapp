import { Component, OnInit,Inject, Optional } from '@angular/core';
import { ClienteRegistro } from '../modelos/clienteregistro';
import { ClienteServicio } from '../servicios/cliente.servicio';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogGenericoAdminComponent } from '../dialog-generico-admin/dialog-generico-admin.component';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.scss'],
  providers: [ClienteServicio]
})
export class ConsultaClienteComponent implements OnInit {

  public titulo="Mantenimiento de registros de clientes";
  public clientes:ClienteRegistro[]=[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5,10,15];
  constructor(
    private _clienteservicio:ClienteServicio,
    private dialog:MatDialog,
    @Optional() public dialogref:MatDialogRef<DialogGenericoAdminComponent>
    
  ) { }

  ngOnInit(): void {
    this.listaCliente();
  }

  onTableDataChange(event:any){
    this.page = event;
    
  }

  onTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page = 1;
    
  }

  listaCliente(){
    this._clienteservicio.listarClientes().subscribe({
      next:(n)=>{
        if(n.listaCliente){
          this.clientes=n.listaCliente;
        }
      },error:(e)=>console.log(e)
    });
  }

  editaCliente(cliente:any){
    console.log(cliente);
    cliente.pass;
    cliente.generoInvoker="mantenimientoCliente";
    cliente.direccion="";
    this.dialogref = this.dialog.open(DialogGenericoAdminComponent,{
      width:'40%',
      data:cliente
    });
    //this.dialogref.close();
  }

}
