import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderNaimationComponent } from './border-naimation.component';

describe('BorderNaimationComponent', () => {
  let component: BorderNaimationComponent;
  let fixture: ComponentFixture<BorderNaimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorderNaimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderNaimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
