import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AvatarPageComponent } from './components/avatar-page/avatar-page.component';
import { HomeLayoutsComponent } from './components/layouts/home-layouts/home-layouts.component';
import { CuartosPageComponent } from './cuartos/cuartos-page/cuartos-page.component';
import { CrarCuartoComponent } from './cuartos/crar-cuarto/crar-cuarto.component';
import { IngresarCuartoComponent } from './cuartos/ingresar-cuarto/ingresar-cuarto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AvatarPageComponent,
    HomeLayoutsComponent,
    CuartosPageComponent,
    CrarCuartoComponent,
    IngresarCuartoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
