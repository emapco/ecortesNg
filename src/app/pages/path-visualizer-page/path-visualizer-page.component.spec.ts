import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathVisualizerPageComponent } from './path-visualizer-page.component';

describe('PathVisualizerPageComponent', () => {
  let component: PathVisualizerPageComponent;
  let fixture: ComponentFixture<PathVisualizerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathVisualizerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathVisualizerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
