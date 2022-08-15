import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { UsuarioServicio } from '../servicios/usuario.servicio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuarioServicio]
})
export class LoginComponent implements OnInit {
  public titulo: string;
  public usuario: Usuario;

  constructor(
    private _usuarioServicio: UsuarioServicio,
    private _router:Router
  ) { 
    this.titulo ="Iniciar sesion";
    this.usuario = new Usuario(-1,'','');
  }

  ngOnInit(): void {
  }
  ingresar(form:any){
    console.log(this.usuario);
    this._usuarioServicio.revisarIngreso(this.usuario).subscribe(
      response=>{
        if(response){
          //console.log(response);
          var param;
          if(response.teller==5){
            console.log("Recordaran este dia como el usuario...!");
            param=response.usuario_c[0].id;
            console.log(param);
            this._router.navigate(['/principal-cliente'],{state:{id:param}});
          }
          if(response.teller==1){
            console.log("Recordaran este dia como el empleado simplon!");
            this._router.navigate(['/principal-empleado']);
          }
          if(response.teller==7){
            console.log("Recordaran este dia como el admin!");
            this._router.navigate(['/principal-admin']);
          }
          if(response.teller==6){
            console.log("Uy!");
            this._router.navigate(['/registro']);
          }
        }
      },
      error =>{
        console.log(<any>error);
        console.log('Uy!');
        this._router.navigate(['/registro']);
      }
    );
  }
}
