import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Stand } from '../../commons/models/stand.model';

@Component({
  selector: 'app-concessionaires',
  templateUrl: './concessionaires.component.html',
  styleUrls: ['./concessionaires.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConcessionairesComponent implements OnInit {

  public isAddConcessionaire: boolean;
  public dataSource: MatTableDataSource<Stand>;
  public displayedColumns: string[];

  constructor() { 

    this.isAddConcessionaire = false;
    this.displayedColumns = ['id', 'imagen1', 'imagen2', 'gif', 'video', 'logo', 'actions'];
  }

  ngOnInit(): void {

    this.getConcessionaires();
  }

  public addConcessionaire() {

    this.isAddConcessionaire = true;
  }
  
  public cancelAddConcessionaire() {

    this.isAddConcessionaire = false;
  }

  public saveConcessionaire() {

    // guardar expositor

    this.cancelAddConcessionaire();
  }

  private getConcessionaires() {

    const data: Array<Stand> = [
      {
        id: 1,
        imagePrincipal: 'img1.png',
        imageSecondary: 'img2.png',
        gif: 'img3.gif',
        video: 'video.mp4',
        logo: 'img4.png'
      },
      {
        id: 2,
        imagePrincipal: 'img1.png',
        imageSecondary: 'img2.png',
        gif: 'img3.gif',
        video: 'video.mp4',
        logo: 'img4.png'
      }
    ]

    this.dataSource = new MatTableDataSource(data);
  }

}
