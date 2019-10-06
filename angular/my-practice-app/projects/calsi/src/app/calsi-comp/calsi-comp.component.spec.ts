import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalsiCompComponent } from './calsi-comp.component';

describe('CalsiCompComponent', () => {
  let component: CalsiCompComponent;
  let fixture: ComponentFixture<CalsiCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalsiCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalsiCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
