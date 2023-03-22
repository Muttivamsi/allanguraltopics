import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtdbComponent } from './ngtdb.component';

describe('NgtdbComponent', () => {
  let component: NgtdbComponent;
  let fixture: ComponentFixture<NgtdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgtdbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgtdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
