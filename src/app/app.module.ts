import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { LineaComponent } from './components/linea/linea.component';
import { BarraComponent } from './components/barra/barra.component';
import { DonutComponent } from './components/donut/donut.component';
import { RadarComponent } from './components/radar/radar.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    BarraComponent,
    DonutComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
