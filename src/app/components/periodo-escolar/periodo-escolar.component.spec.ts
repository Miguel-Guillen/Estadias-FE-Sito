import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoEscolarComponent } from './periodo-escolar.component';

describe('PeriodoEscolarComponent', () => {
  let component: PeriodoEscolarComponent;
  let fixture: ComponentFixture<PeriodoEscolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodoEscolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodoEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
