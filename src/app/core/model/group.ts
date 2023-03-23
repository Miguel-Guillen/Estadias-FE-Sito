export class Group {
    no: number;
    unidad_academica: string; 
    carrera: string;
    especialidad: string;
    periodo: string;
    cuatrimestre: number;
    plan_estudio: string;
    turno: string;
    nombre: string;

    constructor(){
        this.no = 0
        this.unidad_academica = ''
        this.carrera = ''
        this.especialidad = ''
        this.periodo = ''
        this.cuatrimestre = 0
        this.plan_estudio = ''
        this.turno = ''
        this.nombre = ''
    }
}
