import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './modulos/material-imports.module';
import { ComponentesComponent } from './src/app/componentes/componentes.component';
import { ComidaComponent } from './src/app/componentes/comida/comida.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    ComidaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
