import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilDetailsComponent } from './acceuil-details.component';

describe('AcceuilDetailsComponent', () => {
  let component: AcceuilDetailsComponent;
  let fixture: ComponentFixture<AcceuilDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuilDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
