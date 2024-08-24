import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CitySelectorComponent } from './city-selector/city-selector.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route to login
  { path: 'login', component: LoginComponent },          // Login route
  { path: 'city-selector', component: CitySelectorComponent }, // City Selector route
];
