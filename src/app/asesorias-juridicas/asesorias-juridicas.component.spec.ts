import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriasJuridicasComponent } from './asesorias-juridicas.component';

describe('AsesoriasJuridicasComponent', () => {
  let component: AsesoriasJuridicasComponent;
  let fixture: ComponentFixture<AsesoriasJuridicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesoriasJuridicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesoriasJuridicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
