import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityserviicesComponent } from './communityserviices.component';

describe('CommunityserviicesComponent', () => {
  let component: CommunityserviicesComponent;
  let fixture: ComponentFixture<CommunityserviicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityserviicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityserviicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
