import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/home/form/form.component'; 

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'form/:id', component: FormComponent }, // para pasarle el id a la ruta
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);