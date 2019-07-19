import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'amadeus',
    loadChildren: './mozart/mozart.module#MozartModule'
  },
  {
    path: '**',
    redirectTo: 'amadeus'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
