import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadocuentaComponent } from './components/estadocuenta/estadocuenta.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
  {
    path:'',
    component: EstadocuentaComponent
  },
  {
    path:'estadocuenta',
    component: EstadocuentaComponent
  },
  {
    path:'estadocuenta/:id',
    component: EstadocuentaComponent
  },
  {
    path:'navbar',
    component: NavbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
