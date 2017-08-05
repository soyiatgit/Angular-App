import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoorComponent } from './poor.component';

describe('PoorComponent', () => {
  let component: PoorComponent;
  let fixture: ComponentFixture<PoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
