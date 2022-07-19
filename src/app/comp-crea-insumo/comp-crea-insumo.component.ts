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
  public titulo: string;
  public insumo: Insumo;
  public status!: string;
  constructor(
    private _insumoServicio: InsumoServicio
  ) {
      this.titulo= "Registro de nuevo Insumo";
      this.insumo = new Insumo('','',0,1,0,0);
   }

  ngOnInit(): void {
  }

  onSubmitinsumo(form: any){
    //console.log(this.insumo);
    this._insumoServicio.guardarInsumo(this.insumo).subscribe(
      response =>{
        console.log(response.insumo)
        if(response){
          console.log("onSubmit ha sido success");
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
