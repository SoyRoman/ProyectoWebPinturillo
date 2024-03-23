import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLayoutsComponent } from './home-layouts.component';

describe('HomeLayoutsComponent', () => {
  let component: HomeLayoutsComponent;
  let fixture: ComponentFixture<HomeLayoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLayoutsComponent]
    });
    fixture = TestBed.createComponent(HomeLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
