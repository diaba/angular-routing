import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyLifeComponent } from './early-life.component';

describe('EarlyLifeComponent', () => {
  let component: EarlyLifeComponent;
  let fixture: ComponentFixture<EarlyLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarlyLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlyLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
