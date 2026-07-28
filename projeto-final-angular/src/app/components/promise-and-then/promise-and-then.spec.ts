import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseAndThen } from './promise-and-then';

describe('PromiseAndThen', () => {
  let component: PromiseAndThen;
  let fixture: ComponentFixture<PromiseAndThen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromiseAndThen],
    }).compileComponents();

    fixture = TestBed.createComponent(PromiseAndThen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
