import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartosPageComponent } from './cuartos-page.component';

describe('CuartosPageComponent', () => {
  let component: CuartosPageComponent;
  let fixture: ComponentFixture<CuartosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuartosPageComponent]
    });
    fixture = TestBed.createComponent(CuartosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
