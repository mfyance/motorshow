import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Exhibitor } from '../../commons/models/exhibitor.model';

@Component({
  selector: 'app-exhibitors',
  templateUrl: './exhibitors.component.html',
  styleUrls: ['./exhibitors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExhibitorsComponent implements OnInit {

  public isAddExhibitor: boolean;
  public dataSource: MatTableDataSource<Exhibitor>;
  public displayedColumns: string[];

  constructor() { 

    this.isAddExhibitor = false;
    this.displayedColumns = ['id', 'name', 'email', 'theme', 'phones', 'actions'];
  }

  ngOnInit(): void {

    this.getExhibitors();
  }

  public addExhibitor() {

    this.isAddExhibitor = true;
  }
  
  public cancelAddExhibitor() {

    this.isAddExhibitor = false;
  }

  public saveExhibitor() {

    // guardar expositor

    this.cancelAddExhibitor();
  }

  private getExhibitors() {

    const data: Array<Exhibitor> = [
      {
        id: 1,
        name: 'Claro',
        email: 'claro@claro.pe',
        theme: 'Telefonos',
        phones: ['999111000']
      },
      {
        id: 2,
        name: 'Entel',
        email: 'entel@entel.pe',
        theme: 'Telefonos',
        phones: ['999111000', '999555333']
      }
    ]

    this.dataSource = new MatTableDataSource(data);
  }

}
