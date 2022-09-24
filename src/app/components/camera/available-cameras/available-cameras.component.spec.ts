import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCamerasComponent } from './available-cameras.component';

describe('AvailableCamerasComponent', () => {
  let component: AvailableCamerasComponent;
  let fixture: ComponentFixture<AvailableCamerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableCamerasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableCamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
