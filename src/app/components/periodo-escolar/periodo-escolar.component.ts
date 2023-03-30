import { Component, OnInit } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
registerLocaleData(es);

@Component({
  selector: 'app-periodo-escolar',
  templateUrl: './periodo-escolar.component.html',
  styleUrls: ['./periodo-escolar.component.scss']
})
export class PeriodoEscolarComponent implements OnInit {
  datePeriody = [
    'ENERO - ABRIL',
    'MAYO - SEPTIEMBRE',
    'SEPTIEMBRE - DICIEMBRE',
  ]

  filter = 'Seleccionar'
  periody: any[] = [];
  periodyForm: FormGroup

  constructor(private iconSet: IconSetService, private formB: FormBuilder){
    this.iconSet.icons = { ...freeSet };
    this.periodyForm = this.formB.group({
      periodo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      inicioClases: ['', Validators.required],
      finClases: ['', Validators.required],
      extraordinarios: [0, Validators.required],
      estado: [false],
    })
  }

  ngOnInit(): void {
    this.getPeriody();
  }

  getPeriody(){
    this.periody = [
      {
        no: 1,
        periodo: 'ENERO - ABRIL',
        fechaInicio: '2023-02-01',
        fechaFin: '2023-04-14',
        inicioClases: '2023-01-03',
        finClases: '2023-04-14',
        extraordinarios: 1,
        estado: 'Activo'
      },
      {
        no: 2,
        periodo: 'MAYO - AGOSTO',
        fechaInicio: '2023-05-02',
        fechaFin: '2023-08-11',
        inicioClases: '2023-05-02',
        finClases: '2023-08-11',
        extraordinarios: 2,
        estado: 'Inactivo'
      },
      {
        no: 3,
        periodo: 'SEPTIEMBRE - DICIEMBRE',
        fechaInicio: '2023-08-28',
        fechaFin: '2023-12-15',
        inicioClases: '2023-08-28',
        finClases: '2023-12-15',
        extraordinarios: 2,
        estado: 'Inactivo'
      },
      {
        no: 4,
        periodo: 'SEPTIEMBRE - DICIEMBRE',
        fechaInicio: '2022-08-22',
        fechaFin: '2022-12-15',
        inicioClases: '2022-08-15',
        finClases: '2022-12-15',
        extraordinarios: 1,
        estado: 'Inactivo'
      }
    ]
  }

  addPeriody(data){
    if(this.periodyForm.valid){
      const newPeriody = data;
      newPeriody.no = this.periody[this.periody.length - 1].no + 1;
      newPeriody.estado = data.estado === true ? 'Activo' : 'Inactivo';
      this.periody.push(newPeriody);
    }
  }
}
