import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterprofessionnelComponent } from './registerprofessionnel.component';

describe('RegisterprofessionnelComponent', () => {
  let component: RegisterprofessionnelComponent;
  let fixture: ComponentFixture<RegisterprofessionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterprofessionnelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterprofessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
