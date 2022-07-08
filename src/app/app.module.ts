import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { registroComponent } from './Comp_registro/registro.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    registroComponent,
    CrearEmpleadoComponent
  ],
  imports: [
    BrowserModule,
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
