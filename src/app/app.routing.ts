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

//Configuracion de rutas
const appRoutes: Routes = [
    {path:'', component: logearComponent},
    {path:'registro', component:registroComponent},
    {path:'principal-admin',component:CompPrincipalEmpleadoComponent},
    {path:'crear-empleado',component:CrearEmpleadoComponent},
    {path:'consulta-empleado',component:CompConsultaEmpleadoComponent},
    {path:'crear-insumo',component:CompCreaInsumoComponent},
    {path:'consulta-insumo',component:CompConsultaInsumoComponent},
    {path:'crear-servicio',component:CompCreaServicioComponent},
    {path: '**', component:logearComponent}
];

//Exportar el modulo del router
export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);