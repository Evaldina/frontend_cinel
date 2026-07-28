import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablePipeasync } from './observable-pipeasync';

describe('ObservablePipeasync', () => {
  let component: ObservablePipeasync;
  let fixture: ComponentFixture<ObservablePipeasync>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablePipeasync],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservablePipeasync);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
