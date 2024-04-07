import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProComponent } from './portfolio-pro.component';

describe('PortfolioProComponent', () => {
  let component: PortfolioProComponent;
  let fixture: ComponentFixture<PortfolioProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioProComponent]
    });
    fixture = TestBed.createComponent(PortfolioProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
