import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoraneResearchPageComponent } from './borane-research-page.component';

describe('BoraneResearchPageComponent', () => {
  let component: BoraneResearchPageComponent;
  let fixture: ComponentFixture<BoraneResearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoraneResearchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoraneResearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
