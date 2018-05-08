import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IntroComponent } from './intro/intro.component';
import { ExpComponent } from './exp/exp.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TypesComponent } from './types/types.component';
import { StuffComponent } from './stuff/stuff.component'

// Routes
import { RouterModule, Routes} from '@angular/router';

const rutas = [
  { path:'razas', component: ExpComponent },
  { path:'cosas', component: StuffComponent},
  { path:'tipos', component: TypesComponent},
  { path:'', component: IntroComponent, pathMatch:'full' },
  { path:'**', redirectTo:'/'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IntroComponent,
    ExpComponent,
    TypesComponent,
    StuffComponent
  ],
  imports: [
    RouterModule.forRoot(rutas),
    BrowserModule,
    NgbModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
