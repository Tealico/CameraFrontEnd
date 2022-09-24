import { Component, OnInit } from '@angular/core';
import { Camera } from 'src/app/models/camera.model';
import { CameraService } from 'src/app/services/camera.service';

@Component({
  selector: 'app-available-cameras',
  templateUrl: './available-cameras.component.html',
  styleUrls: ['./available-cameras.component.css']
})
export class AvailableCamerasComponent implements OnInit {
  cameras?: Camera[];

  constructor(private cameraService: CameraService) { }

  ngOnInit(): void {
    this.retrieveCameras();
  }
  
  retrieveCameras(): void {
    this.cameraService.getAll()
      .subscribe({
        next: (data) => {
          this.cameras = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });

      // console.log(JSON.stringify(this.cameras));
  }
}
