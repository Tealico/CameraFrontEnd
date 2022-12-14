import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraItemComponent } from './camera-item.component';

describe('CameraItemComponent', () => {
  let component: CameraItemComponent;
  let fixture: ComponentFixture<CameraItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CameraItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
