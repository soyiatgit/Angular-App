import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageComponent } from './average.component';

describe('AverageComponent', () => {
  let component: AverageComponent;
  let fixture: ComponentFixture<AverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
