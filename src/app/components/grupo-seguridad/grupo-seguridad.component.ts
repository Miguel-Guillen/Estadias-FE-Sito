import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-grupo-seguridad',
  templateUrl: './grupo-seguridad.component.html',
  styleUrls: ['./grupo-seguridad.component.scss']
})
export class GrupoSeguridadComponent implements OnInit {
  groups: any[] = [];
  groupForm: FormGroup

  constructor(private formB: FormBuilder) {
    this.groupForm = this.formB.group({
      no: [0, Validators.required],
      nombre: ["", Validators.required],
      sesion: [0, Validators.required],
      estado: [false, Validators.required]
    })
  }

  ngOnInit(): void {
    this.getSecurityGroups()
  }

  getSecurityGroups(){
    this.groups = [
      {
        no: 181,
        nombre: 'SE-Calificación',
        sesion: 3600,
        estado: true
      },
      {
        no: 174,
        nombre: 'SE-Carga Academica',
        sesion: 3600,
        estado: true
      },
      {
        no: 175,
        nombre: 'FAFRH-Recursos Humanos',
        sesion: 3600,
        estado: true
      },
      {
        no: 265,
        nombre: 'DAF-Caja Reportes',
        sesion: 3600,
        estado: false
      },
      {
        no: 261,
        nombre: 'DII-Soporte',
        sesion: 36000,
        estado: true
      },
      {
        no: 98,
        nombre: 'PL-Encuestas',
        sesion: 48000,
        estado: true
      },
      {
        no: 189,
        nombre: 'SA-Docentes',
        sesion: 3600,
        estado: true
      },
      {
        no: 228,
        nombre: 'SA-Gestor Estadias',
        sesion: 36000,
        estado: true
      },
      {
        no: 197,
        nombre: 'SA-Tutoreo - Tutor',
        sesion: 3600,
        estado: true
      }
    ]
  }

  addGroup(data: any){
    if(this.groupForm.valid){
      this.groups.push(data);
    }
  }

  deleteGroup(id: number){
    this.groups = this.groups.filter(group => group.no != id);
  }
}
