import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerComponent } from './practitioner.component';

describe('PractitionerComponent', () => {
  let component: PractitionerComponent;
  let fixture: ComponentFixture<PractitionerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PractitionerComponent]
    });
    fixture = TestBed.createComponent(PractitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
