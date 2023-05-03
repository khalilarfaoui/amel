import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceprofessionnelComponent } from './espaceprofessionnel.component';

describe('LoginComponent', () => {
  let component: EspaceprofessionnelComponent;
  let fixture: ComponentFixture<EspaceprofessionnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceprofessionnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceprofessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
