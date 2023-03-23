import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Group } from 'src/app/core/model/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups: Group[] = [];
  forms: FormGroup;
  formValid = true;

  constructor(private formB: FormBuilder) {
    this.forms = this.createForm()
  }

  ngOnInit(): void {
    this.getData();
  }

  // retorna el formulario creado
  createForm(): FormGroup {
    return this.formB.group({
      unidad_academica: ['Seleccionar'],
      carrera: ['Seleccionar'],
      especialidad: ['Seleccionar'],
      periodo: ['Seleccionar'],
      cuatrimestre: ['Seleccionar'],
      plan_estudio: ['Seleccionar'],
      turno: ['Seleccionar'],
      nombre: ['', Validators.required],
    })
  }

  // obtiene los grupos de la api
  getData(){
    const data = [
      {
        no: 1,
        unidad_academica: 'Universidad Tecnologica de Aguascalientes',
        carrera: 'Ing. en Desarrollo y Gestion de Software',
        especialidad: 'Ing. en Desarrollo y Gestion de Software',
        periodo: 'Enero - Abril 2022',
        cuatrimestre: 11,
        plan_estudio: 'IDGS 18 20',
        turno: 'Vespertino',
        nombre: 'IDGS-11-C-11'
      },
      {
        no: 2,
        unidad_academica: 'Universidad Tecnologica de Aguascalientes',
        carrera: 'Ing. en Desarrollo y Gestion de Software',
        especialidad: 'Ing. en Desarrollo y Gestion de Software',
        periodo: 'Enero - Abril 2022',
        cuatrimestre: 10,
        plan_estudio: 'IDGS 18 20',
        turno: 'Vespertino',
        nombre: 'IDGS-10-C-10'
      }
    ]

    for(const group of data){
      this.groups.push(group)
    }
  };

  // añade un nuevo registro a la tabla de productos
  addGroup(data: Group){
    if(this.forms.valid){
      const group = data;
      group.no = (this.groups[this.groups.length - 1].no + 1)
      this.groups.push(group);
      this.reset();
    }else {
      this.formValid = false;
    }
  }

  // obtencion de los campos del formulario
  get carrera (){ return this.forms.get('carrera') }
  get unidad_academica (){ return this.forms.get('unidad_academica') }
  get especialidad (){ return this.forms.get('especialidad') }
  get periodo (){ return this.forms.get('periodo') }
  get cuatrimestre (){ return this.forms.get('cuatrimestre') }
  get plan_estudio (){ return this.forms.get('plan_estudio') }
  get turno (){ return this.forms.get('turno') }
  get nombre (){ return this.forms.get('nombre') }

  // reinicia el estado del formulario
  reset(){
    this.forms = this.createForm();
    this.formValid = true;
  }
}
