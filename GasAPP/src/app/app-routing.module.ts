import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasolineListComponent } from './components/gasoline-list/gasoline-list.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'index'},
  {path: 'index' , component: GasolineListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
