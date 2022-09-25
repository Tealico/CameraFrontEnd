import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graphic-button',
  templateUrl: './graphic-button.component.html',
  styleUrls: ['./graphic-button.component.css']
})
export class GraphicButtonComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  
  ngOnInit(): void {
  }

  showGraphic(){
    this.router.navigate(['/cameras/graphic']);
  }
}
