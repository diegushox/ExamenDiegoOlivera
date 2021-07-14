import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {LibrosComponent} from '../app/libros/libros.component';
import {QuejasComponent} from '../app/quejas/quejas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quejas', component: QuejasComponent},
  {path: 'libros', component: LibrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
