import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoSeguridadComponent } from './grupo-seguridad.component';

describe('GrupoSeguridadComponent', () => {
  let component: GrupoSeguridadComponent;
  let fixture: ComponentFixture<GrupoSeguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoSeguridadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
