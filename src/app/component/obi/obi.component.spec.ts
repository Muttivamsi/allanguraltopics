import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObiComponent } from './obi.component';

describe('ObiComponent', () => {
  let component: ObiComponent;
  let fixture: ComponentFixture<ObiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
