import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCameraComponent } from './components/camera/add-camera/add-camera.component';
import { GraphicComponent } from './components/camera/graphic/graphic.component';
import { CamerasComponent } from './components/camera/cameras/cameras.component';

const routes: Routes = [
  { path: '', redirectTo: 'cameras', pathMatch: 'full' },
  { path: 'cameras', component: CamerasComponent },
  { path: 'cameras/add', component: AddCameraComponent },
  { path: 'cameras/graphic', component: GraphicComponent }
  // { path: 'tutorials/:id', component: TutorialDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }