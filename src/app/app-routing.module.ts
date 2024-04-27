import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { HomeComponent } from './components/home/home.component';
import { CuartosPageComponent } from './cuartos/cuartos-page/cuartos-page.component';
import { CrarCuartoComponent } from './cuartos/crar-cuarto/crar-cuarto.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'cuartos', component: CuartosPageComponent},
  {path:'crearCuarto', component: CrarCuartoComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

