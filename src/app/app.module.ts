import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { CamerasComponent } from './components/camera/cameras/cameras.component';
import { CamerasSummaryComponent } from './components/camera/cameras-summary/cameras-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CamerasComponent,
    CamerasSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
