import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedngforComponent } from './nestedngfor.component';

describe('NestedngforComponent', () => {
  let component: NestedngforComponent;
  let fixture: ComponentFixture<NestedngforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedngforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
