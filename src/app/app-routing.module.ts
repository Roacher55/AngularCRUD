import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StronaGlownaComponent } from './strona-glowna/strona-glowna.component';
import { ListaOsobComponent } from './lista-osob/lista-osob.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetaleComponent } from './detale/detale.component';


const routes: Routes = [
  {path:'', component: StronaGlownaComponent},
  {path:'ListaOsob', component:ListaOsobComponent},
  {path:'Detale/:id', component: DetaleComponent},
  {path:'**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StronaGlownaComponent, ListaOsobComponent, NotFoundComponent, DetaleComponent]
