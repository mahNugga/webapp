//Importar modulos para permitir el routing de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router"; 
import { CompConsultaEmpleadoComponent } from "./comp-consulta-empleado/comp-consulta-empleado.component";
import { CompConsultaInsumoComponent } from "./comp-consulta-insumo/comp-consulta-insumo.component";
import { CompCreaInsumoComponent } from "./comp-crea-insumo/comp-crea-insumo.component";
import { CompCreaServicioComponent } from "./comp-crea-servicio/comp-crea-servicio.component";
import { CompPrincipalEmpleadoComponent } from "./comp-principal-empleado/comp-principal-empleado.component";

//Importar los componentes
import {logearComponent} from './Comp_login/logear.component';
import { registroComponent } from "./Comp_registro/registro.component";
import { CrearEmpleadoComponent } from "./crear-empleado/crear-empleado.component";
import { EntradaClienteComponent } from "./entrada-cliente/entrada-cliente.component";
import { EntradaEmpleadoComponent } from "./entrada-empleado/entrada-empleado.component";
import { EntradaPrincipalComponent } from "./entrada-principal/entrada-principal.component";
import { LoginComponent } from "./login/login.component";
import { HorarioComponent } from "./horario/horario.component";
import { ReservacionComponent } from "./reservacion/reservacion.component";
import { CompConsultaServicioComponent } from "./comp-consulta-servicio/comp-consulta-servicio.component";
import { ConsultaClienteComponent } from "./consulta-cliente/consulta-cliente.component";
import { ReservaConfirmacionComponent } from "./reserva-confirmacion/reserva-confirmacion.component";
import { MostrarReservaClienteComponent } from "./mostrar-reserva-cliente/mostrar-reserva-cliente.component";
import { MostrarReservaEmpleadoComponent } from "./mostrar-reserva-empleado/mostrar-reserva-empleado.component";
import { ConsultaHorarioEmpleadoComponent } from "./consulta-horario-empleado/consulta-horario-empleado.component";
import { MostrarHorarioEmpleadoComponent } from "./mostrar-horario-empleado/mostrar-horario-empleado.component";
import { MostrarreservaadminComponent } from "./mostrarreservaadmin/mostrarreservaadmin.component";
import { MantenimientoempleadoComponent } from "./mantenimientoempleado/mantenimientoempleado.component";
import { PerfilclienteComponent } from "./perfilcliente/perfilcliente.component";
import { MantenimientoestadoComponent } from "./mantenimientoestado/mantenimientoestado.component";

//Configuracion de rutas
const appRoutes: Routes = [
    {path:'', component: LoginComponent},
    {path:'registro', component:registroComponent},
    {path:'principal',component:EntradaPrincipalComponent},
    {path:'reservar',component:ReservacionComponent},
    {path:'reservacion-cliente',component:MostrarReservaClienteComponent},
    {path:'perfil-cliente',component:PerfilclienteComponent},
    {path:'confirmar-reserva',component:ReservaConfirmacionComponent},
    {path:'principal-cliente',component:EntradaClienteComponent},
    {path:'principal-empleado',component:EntradaEmpleadoComponent},
    {path:'principal-admin',component:CompPrincipalEmpleadoComponent},
    {path:'crear-empleado',component:CrearEmpleadoComponent},
    {path:'consulta-empleado',component:CompConsultaEmpleadoComponent},
    {path:'crear-insumo',component:CompCreaInsumoComponent},
    {path:'consulta-insumo',component:CompConsultaInsumoComponent},
    {path:'crear-servicio',component:CompCreaServicioComponent},
    {path:'consulta-servicio',component:CompConsultaServicioComponent},
    {path:'crear-horario',component:HorarioComponent},
    {path:'consulta-horariosadmin',component:MostrarHorarioEmpleadoComponent},
    {path:'mantenimiento-cliente',component:ConsultaClienteComponent},
    {path:'mantenimiento-empleado',component:MantenimientoempleadoComponent},
    {path:'mantenimiento-estado',component:MantenimientoestadoComponent},
    {path:'mostrar-reservaempleado',component:MostrarReservaEmpleadoComponent},
    {path:'mostrar-horariosempleado',component:ConsultaHorarioEmpleadoComponent},
    {path:'mostrar-detallereservas',component:MostrarreservaadminComponent},
    {path: '**', component:logearComponent}
];

//Exportar el modulo del router
export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);