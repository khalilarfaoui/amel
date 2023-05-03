import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceparComponent } from './espacepar.component';

describe('EspaceparComponent', () => {
  let component: EspaceparComponent;
  let fixture: ComponentFixture<EspaceparComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceparComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
