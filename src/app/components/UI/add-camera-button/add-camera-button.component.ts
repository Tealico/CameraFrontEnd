import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-camera-button',
  templateUrl: './add-camera-button.component.html',
  styleUrls: ['./add-camera-button.component.css']
})
export class AddCameraButtonComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addCamera(){
    this.router.navigate(['/cameras/add']);
  }
}
