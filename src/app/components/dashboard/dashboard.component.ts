import { Component, OnInit } from '@angular/core';
import { INavData } from '@coreui/angular/public-api';
import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  icons!: [string, string[]][];
  navItems: INavData[] = [
    {
      name: 'Inicio',
      url: '/',
      iconComponent: { name: 'cil-view-quilt' },
    },
    {
      name: 'Historial',
      url: './historial',
      iconComponent: { name: 'cil-folder-open' }
    },
    {
      name: 'Grupos',
      url: './groups',
      iconComponent: { name: 'cil-user' },
    }
  ] 

  constructor(private iconSet: IconSetService){
    this.iconSet.icons = { ...freeSet };
  }

  ngOnInit(): void {}
}
