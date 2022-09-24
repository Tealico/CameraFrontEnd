import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { CamerasComponent } from './components/camera/cameras/cameras.component';
import { CamerasSummaryComponent } from './components/camera/cameras-summary/cameras-summary.component';
import { AvailableCamerasComponent } from './components/camera/available-cameras/available-cameras.component';
import { HttpClientModule } from '@angular/common/http';
import { CameraItemComponent } from './components/camera/camera-item/camera-item.component';
import { CardComponent } from './components/UI/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CamerasComponent,
    CamerasSummaryComponent,
    AvailableCamerasComponent,
    CameraItemComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
