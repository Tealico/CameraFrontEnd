import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamerasSummaryComponent } from './cameras-summary.component';

describe('CamerasSummaryComponent', () => {
  let component: CamerasSummaryComponent;
  let fixture: ComponentFixture<CamerasSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamerasSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamerasSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
