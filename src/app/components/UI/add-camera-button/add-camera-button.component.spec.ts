import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCameraButtonComponent } from './add-camera-button.component';

describe('AddCameraButtonComponent', () => {
  let component: AddCameraButtonComponent;
  let fixture: ComponentFixture<AddCameraButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCameraButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCameraButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
