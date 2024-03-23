import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarCuartoComponent } from './ingresar-cuarto.component';

describe('IngresarCuartoComponent', () => {
  let component: IngresarCuartoComponent;
  let fixture: ComponentFixture<IngresarCuartoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarCuartoComponent]
    });
    fixture = TestBed.createComponent(IngresarCuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
