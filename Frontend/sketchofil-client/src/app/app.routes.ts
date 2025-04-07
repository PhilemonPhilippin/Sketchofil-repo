import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { LogoutComponent } from './features/auth/logout/logout.component';
import { AdminTestComponent } from './features/sketch/admin-test/admin-test.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/logout', component: LogoutComponent },
  { path: 'admin', component: AdminTestComponent },
];
