import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicButtonComponent } from './graphic-button.component';

describe('GraphicButtonComponent', () => {
  let component: GraphicButtonComponent;
  let fixture: ComponentFixture<GraphicButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
