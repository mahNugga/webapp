import { Component, OnInit } from '@angular/core';
import { Insumo } from '../modelos/insumo';
import { InsumoServicio } from '../servicios/insumo.servicio';

@Component({
  selector: 'app-comp-crea-insumo',
  templateUrl: './comp-crea-insumo.component.html',
  styleUrls: ['./comp-crea-insumo.component.scss'],
  providers:[InsumoServicio]
})
export class CompCreaInsumoComponent implements OnInit {
  public insumo: Insumo;
  public status!: string;
  constructor(
    private _insumoServicio: InsumoServicio
  ) {
      this.insumo = new Insumo('','',0,1,0,0);
   }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    this._insumoServicio.guardarInsumo(this.insumo).subscribe(
      response =>{
        if(response.insumo){
          this.status = 'success';
          form.reset();
        }else{
          this.status = 'fail';
        }

      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}
