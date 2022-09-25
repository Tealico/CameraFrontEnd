import { Component, OnInit } from '@angular/core';
import { Camera } from 'src/app/models/camera.model';
import { CameraService } from 'src/app/services/camera.service';

@Component({
  selector: 'app-camera-form',
  templateUrl: './camera-form.component.html',
  styleUrls: ['./camera-form.component.css']
})
export class CameraFormComponent implements OnInit {

  created: Boolean =false;

  camera: Camera = {
    id: "",
    name: undefined,
    resolution: "",
    model: "",
    ip: ""
  };

  constructor(private cameraService: CameraService) { }

  ngOnInit(): void {
  }

  saveCamera(){
    let ipOctets = this.camera.ip.split(".");

    let ip = {
      octetOne: ipOctets[0],
      octetTwo: ipOctets[1],
      octetThree: ipOctets[2],
      octetFour: ipOctets[3],
    }

    this.camera.ip=ip;

    this.cameraService.create(this.camera).subscribe({
      next: (data)=>{
        console.log("U krijua me sukses", data);
        this.created=true;
      },
      error: (err)=>{
        console.log("Dicka shkoi gabim" ,err);
      }
    })
  }

  newCamera(){
    this.camera= {
      id: "",
      name: "",
      resolution: "",
      model: "",
      ip: ""
    };
    this.created=false;
  }
}
