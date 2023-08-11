import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PujascheduleComponent } from './pujaschedule.component';

describe('PujascheduleComponent', () => {
  let component: PujascheduleComponent;
  let fixture: ComponentFixture<PujascheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PujascheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PujascheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
