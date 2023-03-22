import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stylebinding2Component } from './stylebinding2.component';

describe('Stylebinding2Component', () => {
  let component: Stylebinding2Component;
  let fixture: ComponentFixture<Stylebinding2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stylebinding2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stylebinding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
