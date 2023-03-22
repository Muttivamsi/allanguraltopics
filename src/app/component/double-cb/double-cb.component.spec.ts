import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleCBComponent } from './double-cb.component';

describe('DoubleCBComponent', () => {
  let component: DoubleCBComponent;
  let fixture: ComponentFixture<DoubleCBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleCBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleCBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
