import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

  transform(periody: any[], searchValue: string): any[] {
    if(!periody) return [];
    if(!searchValue || searchValue == 'Seleccionar') return periody;

    return periody.filter(p => {
      const itemYear = new Date(p.fechaInicio).getFullYear();      
      return itemYear === parseInt(searchValue);
    });
  }

}
