import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { NgxPaginationModule } from 'ngx-pagination';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { DialogEmpleadoComponent } from './dialog-empleado/dialog-empleado.component';
import { DialogGenCreacionComponent } from './dialog-gen-creacion/dialog-gen-creacion.component';
import { DialogEliminarGenComponent } from './dialog-eliminar-gen/dialog-eliminar-gen.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HorarioComponent } from './horario/horario.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { ConsultaClienteComponent } from './consulta-cliente/consulta-cliente.component';
import { ReservaConfirmacionComponent } from './reserva-confirmacion/reserva-confirmacion.component';
import { MostrarReservaClienteComponent } from './mostrar-reserva-cliente/mostrar-reserva-cliente.component';
import { MostrarReservaEmpleadoComponent } from './mostrar-reserva-empleado/mostrar-reserva-empleado.component';
import { MostrarHorarioEmpleadoComponent } from './mostrar-horario-empleado/mostrar-horario-empleado.component';
import { ConsultaHorarioEmpleadoComponent } from './consulta-horario-empleado/consulta-horario-empleado.component';
import { MostrarreservaadminComponent } from './mostrarreservaadmin/mostrarreservaadmin.component';
import { MantenimientoempleadoComponent } from './mantenimientoempleado/mantenimientoempleado.component';


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
    CabMainComponent,
    DialogEmpleadoComponent,
    DialogGenCreacionComponent,
    DialogEliminarGenComponent,
    HorarioComponent,
    ReservacionComponent,
    ConsultaClienteComponent,
    ReservaConfirmacionComponent,
    MostrarReservaClienteComponent,
    MostrarReservaEmpleadoComponent,
    MostrarHorarioEmpleadoComponent,
    ConsultaHorarioEmpleadoComponent,
    MostrarreservaadminComponent,
    MantenimientoempleadoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    routing,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatPaginatorModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
