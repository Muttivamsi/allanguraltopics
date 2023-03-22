import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforobectComponent } from './ngforobect.component';

describe('NgforobectComponent', () => {
  let component: NgforobectComponent;
  let fixture: ComponentFixture<NgforobectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforobectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgforobectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
