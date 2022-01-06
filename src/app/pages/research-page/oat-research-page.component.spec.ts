import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OatResearchPageComponent } from './oat-research-page.component';

describe('ResearchPageComponent', () => {
  let component: OatResearchPageComponent;
  let fixture: ComponentFixture<OatResearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OatResearchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OatResearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
