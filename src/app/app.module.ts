import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StronaGlownaComponent } from './strona-glowna/strona-glowna.component';
import { ListaOsobComponent } from './lista-osob/lista-osob.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { environment } from '../environments/environment';
import { DetaleComponent } from './detale/detale.component';
import { PomocService } from './pomoc.service';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StronaGlownaComponent,
    ListaOsobComponent,
    NotFoundComponent,
    routingComponents,
    DetaleComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
    
  ],
  providers: [PomocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
