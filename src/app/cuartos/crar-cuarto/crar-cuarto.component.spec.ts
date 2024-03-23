import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrarCuartoComponent } from './crar-cuarto.component';

describe('CrarCuartoComponent', () => {
  let component: CrarCuartoComponent;
  let fixture: ComponentFixture<CrarCuartoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrarCuartoComponent]
    });
    fixture = TestBed.createComponent(CrarCuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
