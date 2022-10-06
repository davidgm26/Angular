import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './modulos/material-imports.module';
import { ListadoAlumnosComponent } from './componentes/listado-alumnos/listado-alumnos.component';
import { FormsModule } from '@angular/forms';
import { StorageComponent } from './componentes/storage/storage.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoAlumnosComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
