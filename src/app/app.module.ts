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
import { AddCameraComponent } from './components/camera/add-camera/add-camera.component';
import { AddCameraButtonComponent } from './components/UI/add-camera-button/add-camera-button.component';
import { GraphicComponent } from './components/camera/graphic/graphic.component';
import { GraphicButtonComponent } from './components/UI/graphic-button/graphic-button.component';
import { CameraFormComponent } from './components/camera/camera-form/camera-form.component';
import { FormsModule } from '@angular/forms';
import { UpdateCameraComponent } from './components/camera/update-camera/update-camera.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CamerasComponent,
    CamerasSummaryComponent,
    AvailableCamerasComponent,
    CameraItemComponent,
    CardComponent,
    AddCameraComponent,
    AddCameraButtonComponent,
    GraphicButtonComponent,
    GraphicComponent,
    CameraFormComponent,
    UpdateCameraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
