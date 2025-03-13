import { Routes } from '@angular/router';
import { InicioComponent } from '../components/inicio/inicio.component';
import { SobreMiComponent } from '../components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from '../components/proyectos/proyectos.component';


export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    {path: '', redirectTo: 'inicio',  pathMatch: 'full'},
    {path : 'sobre-mi', component: SobreMiComponent},
    {path :'proyectos', component: ProyectosComponent}
    
];
