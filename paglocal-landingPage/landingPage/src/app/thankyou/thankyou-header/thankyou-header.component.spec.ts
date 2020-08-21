import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouHeaderComponent } from './thankyou-header.component';

describe('ThankyouHeaderComponent', () => {
  let component: ThankyouHeaderComponent;
  let fixture: ComponentFixture<ThankyouHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
