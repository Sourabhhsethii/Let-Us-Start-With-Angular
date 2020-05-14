import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleFormComponentComponent } from './sample-form-component.component';

describe('SampleFormComponentComponent', () => {
  let component: SampleFormComponentComponent;
  let fixture: ComponentFixture<SampleFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
