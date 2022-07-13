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
    CompPrincipalEmpleadoComponent
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
