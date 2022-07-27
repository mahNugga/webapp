import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { registroComponent } from './Comp_registro/registro.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { CompConsultaEmpleadoComponent } from './comp-consulta-empleado/comp-consulta-empleado.component';
import { CompCreaInsumoComponent } from './comp-crea-insumo/comp-crea-insumo.component';
import { CompConsultaInsumoComponent } from './comp-consulta-insumo/comp-consulta-insumo.component';
import { CompCreaServicioComponent } from './comp-crea-servicio/comp-crea-servicio.component';
import { CompConsultaServicioComponent } from './comp-consulta-servicio/comp-consulta-servicio.component';
import { CompPrincipalEmpleadoComponent } from './comp-principal-empleado/comp-principal-empleado.component';
import { SliderComponent } from './slider/slider.component';
import { CabAdminComponent } from './cab-admin/cab-admin.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { EntradaEmpleadoComponent } from './entrada-empleado/entrada-empleado.component';
import { CabEmpleadoComponent } from './cab-empleado/cab-empleado.component';
import { EntradaClienteComponent } from './entrada-cliente/entrada-cliente.component';
import { CabClienteComponent } from './cab-cliente/cab-cliente.component';
import { EntradaPrincipalComponent } from './entrada-principal/entrada-principal.component';
import { CabMainComponent } from './cab-main/cab-main.component';

@NgModule({
  declarations: [
    AppComponent,
    registroComponent,
    CrearEmpleadoComponent,
    CompConsultaEmpleadoComponent,
    CompCreaInsumoComponent,
    CompConsultaInsumoComponent,
    CompCreaServicioComponent,
    CompConsultaServicioComponent,
    CompPrincipalEmpleadoComponent,
    SliderComponent,
    CabAdminComponent,
    RegistroComponent,
    LoginComponent,
    EntradaEmpleadoComponent,
    CabEmpleadoComponent,
    EntradaClienteComponent,
    CabClienteComponent,
    EntradaPrincipalComponent,
    CabMainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
