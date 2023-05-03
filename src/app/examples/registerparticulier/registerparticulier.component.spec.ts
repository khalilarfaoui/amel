import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterparticulierComponent } from './registerparticulier.component';

describe('RegisterparticulierComponent', () => {
  let component: RegisterparticulierComponent;
  let fixture: ComponentFixture<RegisterparticulierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterparticulierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterparticulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
