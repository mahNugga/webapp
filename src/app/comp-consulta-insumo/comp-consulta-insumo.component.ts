import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Insumo } from '../modelos/insumo';
import { InsumoServicio } from '../servicios/insumo.servicio';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-comp-consulta-insumo',
  templateUrl: './comp-consulta-insumo.component.html',
  styleUrls: ['./comp-consulta-insumo.component.scss'],
  providers:[InsumoServicio]
})
export class CompConsultaInsumoComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['nombre','descripcion','costo','stock','stock_ideal'];
  dataSource: MatTableDataSource<Insumo>;
  public insumos: Insumo[] = []; 

  @ViewChild(MatPaginator)paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  constructor(
    private _insumoServicio: InsumoServicio
  ) {
    this.dataSource = new MatTableDataSource();
   }

  ngOnInit(): void {
    this.listarInsumo();
    //console.log(this.insumos);
    //console.log(this.dataSource);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  listarInsumo(){
    this._insumoServicio.listaInsumo().subscribe(
      response=>{
        if(response){
          this.insumos = response.listaInsumo;
          this.dataSource =response.listaInsumo;
        }
        console.log(this.insumos);
        console.log(this.dataSource);
      },
      error=>{
        console.log(<any>error)
      }
      
    );
  }

}
