# CameraClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Demo 
![](CameraClient.gif)

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Create components

Run `ng generate component component-name` to generate a new component.

## Impementation 
This project is a SPA website based on the following components:
1. add-camera 
2. available-cameras
3. camera-form
4. camera-item
5. cameras
6. cameras-summary
7. graphic
8. update-camera
9. layout (header)
10. UI (add-camera-button, graphic-button, card)

### Navigation 
Navigation throught components is defined in app-routing.module.ts. To make navigation work the below line should be added to app.component.html

```html 
<router-outlet></router-outlet>
```
- path '' => CamerasComponent
- path 'cameras' => CameraComponents
- path 'cameras/add' => AddCameraComponents
- path 'cameras/graphic' => GraphicComponent
- path 'cameras/edit/:id' => UpdateCameraComponent

### Graphic
To add graphic a camera client the project used [APEXCHARTS](https://apexcharts.com/angular-chart-demos/pie-charts/simple-pie/) with static dummy data.



