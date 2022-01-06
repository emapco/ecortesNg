import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolViewerComponent } from './mol-viewer.component';

describe('MolViewerComponent', () => {
  let component: MolViewerComponent;
  let fixture: ComponentFixture<MolViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
