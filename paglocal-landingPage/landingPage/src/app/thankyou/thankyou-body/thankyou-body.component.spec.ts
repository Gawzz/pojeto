import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouBodyComponent } from './thankyou-body.component';

describe('ThankyouBodyComponent', () => {
  let component: ThankyouBodyComponent;
  let fixture: ComponentFixture<ThankyouBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
