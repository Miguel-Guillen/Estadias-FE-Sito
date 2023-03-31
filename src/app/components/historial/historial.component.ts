import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {
  @ViewChild('printContent') printContent!: ElementRef;
  grades: any;
  debts: any[] = [];
  modalCredits = false;
  modalDebts = false;

  constructor(){}

  ngOnInit(): void {
    this.getGrades();
    this.getDebts();
  }

  getGrades(){
    this.grades = {
      nombre: 'Miguel Angel Guillen Valdez',
      carrera: 'ING. en Desarrollo y Gestion de Software',
      matricula: 191317,
      estado: 'IN',
      grupo: 'IDGS-11-C',
      periodo: {
        noPeriodo: 11,
        fechaPeriodo: '2023 Enero-Abril'
      },
      modalidad: '1 año y 8 meses',
      calificaciones: [
        {
          cuatrimestre: 1,
          periodo: '2019 SEPTIEMBRE - DICIEMBRE',
          grupo: 'TIADSM 1E',
          creditos: 10,
          materias: [
              {
                nombre: 'Desarrollo de Habilidades de Pensamiento Lógico',
                calificacion: [9.5, 10, 9.3],
                cf: 9.6,
                es: 'AO',
                f: 1
              },
              {
                nombre: 'Fundamentos de Redes',
                calificacion: [8.6, 8, 8, 8, 8, 8],
                cf: 8.1,
                es: 'AO',
                f: 2
              },
              {
                nombre: 'Fundamentos de TI',
                calificacion: [10, 9.6, 10],
                cf: 9.9,
                es: 'AO',
                f: 3
              },
              {
                nombre: 'Inglés I',
                calificacion: [8.9, 8.6, 8.6],
                cf: 8.7,
                es: 'AO',
                f: 4
              },
              {
                nombre: 'Expresión Oral y Escrita I',
                calificacion: [8.5, 8.7, 8],
                cf: 8.4,
                es: 'AO',
                f: 4
              },
              {
                nombre: 'Metodología de la Programación',
                calificacion: [10, 8.3, 9.5],
                cf: 9.3,
                es: 'AO',
                f: 1
              },
              {
                nombre: 'Formación Sociocultural I',
                calificacion: [8, 9.5],
                cf: 8.8,
                es: 'AO',
                f: 2
              },
              {
                nombre: 'Álgebra Lineal',
                calificacion: [9.5, 8, 8, 8.67],
                cf: 8.6,
                es: 'AO',
                f: 3
              }
          ]
        },
        {
          cuatrimestre: 2,
          periodo: '2020 ENERO - ABRIL',
          grupo: 'TIADSM 2E',
          creditos: 24,
          materias: [
              {
                nombre: 'Base de Datos',
                calificacion: [9, 9.3, 10],
                cf: 9.4,
                es: 'AO',
                f: 1
              },
              {
                nombre: 'Inglés II',
                calificacion: [9, 10, 10],
                cf: 9.4,
                es: 'AO',
                f: 2
              },
              {
                nombre: 'Formación Sociocultural II',
                calificacion: [10, 9.6, 10],
                cf: 9.9,
                es: 'AO',
                f: 2
              },
              {
                nombre: 'Funciones Matemáticas',
                calificacion: [8.9, 8.6, 8.6],
                cf: 8.7,
                es: 'AO',
                f: 1
              },
              {
                nombre: 'Expresión Oral y Escrita I',
                calificacion: [8.5, 8.7, 8],
                cf: 8.4,
                es: 'AO',
                f: 4
              },
              {
                nombre: 'Metodologías y Modelado de Desarrollo de Software',
                calificacion: [8, 8.3, 9.5],
                cf: 8.7,
                es: 'AO',
                f: 2
              },
              {
                nombre: 'Interconexión de Redes',
                calificacion: [10, 10, 10, 10, 9.9, 10],
                cf: 9.9,
                es: 'AO',
                f: 5
              },
              {
                nombre: 'Programación Orientada a Objetos',
                calificacion: [9.5, 7.6, 8, 8.67],
                cf: 7.9,
                es: 'AO',
                f: 0
              }
          ]
        }
      ],
      creditos: [
        {
          no: 1,
          actividad: 'Ajedrez Mixto',
          periodo: '2019 ENERO - ABRIL',
          creditos: 10
        },
        {
          no: 2,
          actividad: 'Matematicas Curso',
          periodo: '2019 MAYO - SEPTIEMBRE',
          creditos: 23
        },
        {
          no: 3,
          actividad: 'Ingles Curso',
          periodo: '2019 SEPTIEMBRE - DICIEMBRE',
          creditos: 0
        }
      ]
    }
  }

  getDebts(){
    this.debts = [
      {
        folio: 2600399,
        adeudo: 'Tramite de titulacion ING 2023',
        fecha: new Date('2023-02-15'),
        total: 2592.00
      },
      {
        folio: 2601589,
        adeudo: 'Abril 2023 - 1 año 8 meses ingenieria',
        fecha: new Date('2023-04-15'),
        total: 822.00
      }
    ]
  }

  openModalCredit() {
    this.modalCredits = !this.modalCredits;
  }

  openModalDebts() {
    this.modalDebts = !this.modalDebts;
  }

  handleChange(event: any, modal: string) {
    if(modal == 'credits') this.modalCredits = event;
    if(modal == 'debts') this.modalDebts = event;
  }

  download(value?: any){
    let pdf;
    if(value < 1 || value == undefined){
      pdf = {
        content: [
          {text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt harum in voluptates, natus, quidem omnis at quo dolor cumque maiores quae possimus labore, animi error! Soluta suscipit magni culpa doloribus!', style: 'header'},
          'Prueba de PDF.',
          {text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt harum in voluptates, natus, quidem omnis at quo dolor cumque maiores quae possimus labore, animi error! Soluta suscipit magni culpa doloribus!', style: 'subheader'},
          {text: '\n'},
          {
            style: 'tableExample',
            table: {
              body: [
                ['No.', 'Actividad', 'Periodo', 'Creditos'],
                ['1', 'Ajedrez Mixto', '2019 ENERO - ABRIL', '10'],
                ['2', 'Matematicas Curso', '2019 MAYO - SEPTIEMBRE', '23'],
                ['3', 'Ingles Curso', '2019 SEPTIEMBRE - DICIEMBRE', '0']
              ]
            }
          }
        ],
        styles: {},
        defaultStyle: {
          fontSize: 10.5,
          lineHeight: 1.3,
          margin: 80
        }
      }
    }else {
      window.print();
    }

    const docPdf = pdfMake.createPdf(pdf);
    docPdf.open();
  }

  get totalCredits(){
    let total = 0;
    for(const credit of this.grades.creditos){
      total += credit.creditos
    }
    return total;
  }

  get totalDebts(){
    let total = 0;
    for(const debt of this.debts){
      total += debt.total
    }
    return total;
  }
}
