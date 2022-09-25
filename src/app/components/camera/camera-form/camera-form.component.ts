import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera } from 'src/app/models/camera.model';
import { CameraService } from 'src/app/services/camera.service';

@Component({
  selector: 'app-camera-form',
  templateUrl: './camera-form.component.html',
  styleUrls: ['./camera-form.component.css']
})
export class CameraFormComponent implements OnInit {
  formTitle: String="Add a new camera";

  created: Boolean =false;

  id: any = undefined;

  camera: Camera = {
    id: "",
    name: "",
    resolution: "",
    model: "",
    ip: ""
  };

  @Input() type: String = "add";

  constructor(
    private cameraService: CameraService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.type === "add")
      this.formTitle = "Add a new camera";
    else if(this.type === "update")
      this.formTitle = "Edit camera details";

    if(this.type === "update")
      this.retrieveCamera();
  }

  retrieveCamera(){
    this.id = this.route.snapshot.paramMap.get('id');

    this.cameraService.getById(this.id).subscribe({
      next:(data) => {
        this.camera = data;
        this.camera.ip = `${data.ip.octetOne}.${data.ip.octetTwo}.${data.ip.octetThree}.${data.ip.octetFour}`;
      },
      error:(error) => {
        console.log(error);
      }
    });
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

    if(this.type === "add"){
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
    else if(this.type === "update"){
      this.cameraService.update(this.id, this.camera).subscribe({
        next: (data) => {
          this.router.navigate([`/cameras`]);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
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
