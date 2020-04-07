import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// component
import { AppComponent } from './app.component';
import { VirusComponent } from './component/virus/virus.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';


// material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTING } from "./app.routing";
@NgModule({
  declarations: [
    AppComponent,
    VirusComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    ROUTING,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
