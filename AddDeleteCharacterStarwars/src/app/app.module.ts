import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './modules/material-imports.module';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterComponent } from './components/character/character.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmsComponent } from './components/films/films.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { PlanetComponent } from './components/planet/planet.component';
import { SpeciesDetailsComponent } from './components/species-details/species-details.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarShipsDetailComponent } from './components/star-ships-detail/star-ships-detail.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    CharacterComponent,
    PlanetComponent,
    SpeciesComponent,
    NotFoundComponent,
    FilmsComponent,
    VehiclesComponent,
    StarshipsComponent,
    CharacterDetailsComponent,
    StarShipsDetailComponent,
    PlanetDetailsComponent,
    SpeciesDetailsComponent,
    FilmDetailsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
