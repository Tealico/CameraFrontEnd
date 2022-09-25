import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CameraService } from 'src/app/services/camera.service';

@Component({
  selector: 'app-camera-item',
  templateUrl: './camera-item.component.html',
  styleUrls: ['./camera-item.component.css']
})
export class CameraItemComponent implements OnInit {

  @Input() id: string | undefined;

  @Input() name: string | undefined;

  @Input() model: string | undefined;

  @Input() resolution: string | undefined;

  @Input() ip: any | undefined;

  @Output() onDelete = new EventEmitter<any>();

  constructor(
    private cameraService: CameraService,     
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.cameraService.delete(this.id)
      .subscribe({
        next: (res) => {
          this.onDelete.emit();
        },
        error: (e) => console.error(e)
      });
  }
}
