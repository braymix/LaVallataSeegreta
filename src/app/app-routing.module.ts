import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertLuogoComponent } from './insert-luogo/insert-luogo.component';


const routes: Routes = [{
  path: "",
  component: InsertLuogoComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
