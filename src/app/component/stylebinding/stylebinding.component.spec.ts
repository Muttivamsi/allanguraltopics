import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stylebinding1Component } from './stylebinding.component';

describe('Stylebinding1Component', () => {
  let component: Stylebinding1Component;
  let fixture: ComponentFixture<Stylebinding1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stylebinding1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stylebinding1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
