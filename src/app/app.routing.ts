//Importar modulos para permitir el routing de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router"; 

//Importar los componentes
import {logearComponent} from './Comp_login/logear.component';
import { registroComponent } from "./Comp_registro/registro.component";

//Configuracion de rutas
const appRoutes: Routes = [
    {path:'', component: logearComponent},
    {path:'registro', component:registroComponent},
    {path: '**', component:logearComponent}
];

//Exportar el modulo del router
export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);