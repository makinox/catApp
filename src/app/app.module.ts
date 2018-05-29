import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IntroComponent } from './components/intro/intro.component';
import { RazasComponent } from './components/razas/razas.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TypesComponent } from './components/types/types.component';
import { StuffComponent } from './components/stuff/stuff.component';
import { RouterModule, Routes } from '@angular/router';
import { RazasResComponent } from './components/razas/razas-res/razas-res.component';
import { GatosService } from './services/gatos.service';
import { TypesResComponent } from './components/types/types-res/types-res.component';
import { StuffResComponent } from './components/stuff/stuff-res/stuff-res.component';
import { RazasHonorComponent } from './components/razas/razas-honor/razas-honor.component';
import { RazasPageComponent } from './components/razas/razas-page/razas-page.component';
import { TypesPageComponent } from './components/types/types-page/types-page.component';

const rutas = [
  { path: 'razas', component: RazasPageComponent },
  { path: 'razas/:gato', component: RazasResComponent },
  { path: 'cosas', component: StuffComponent },
  { path: 'cosas/:cos', component: StuffResComponent },
  { path: 'tipos', component: TypesPageComponent },
  { path: 'tipos/:raz', component: TypesResComponent },
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IntroComponent,
    RazasComponent,
    TypesComponent,
    StuffComponent,
    RazasResComponent,
    TypesResComponent,
    StuffResComponent,
    RazasHonorComponent,
    RazasPageComponent,
    TypesPageComponent
  ],
  imports: [
    RouterModule.forRoot(rutas),
    BrowserModule,
    NgbModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [GatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
