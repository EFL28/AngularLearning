import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerCleatsComponent } from './soccer-cleats.component';

describe('SoccerCleatsComponent', () => {
  let component: SoccerCleatsComponent;
  let fixture: ComponentFixture<SoccerCleatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoccerCleatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoccerCleatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
