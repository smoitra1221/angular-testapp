import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PujaratesComponent } from './pujarates.component';

describe('PujaratesComponent', () => {
  let component: PujaratesComponent;
  let fixture: ComponentFixture<PujaratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PujaratesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PujaratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
