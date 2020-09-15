import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Stand } from '../../commons/models/stand.model';

@Component({
  selector: 'app-stands',
  templateUrl: './stands.component.html',
  styleUrls: ['./stands.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandsComponent implements OnInit {

  public isAddStand: boolean;
  public dataSource: MatTableDataSource<Stand>;
  public displayedColumns: string[];

  constructor() { 

    this.isAddStand = false;
    this.displayedColumns = ['id', 'imagen1', 'imagen2', 'gif', 'video', 'logo', 'actions'];
  }

  ngOnInit(): void {

    this.getStands();
  }

  public addStand() {

    this.isAddStand = true;
  }
  
  public cancelAddStand() {

    this.isAddStand = false;
  }

  public saveStand() {

    // guardar expositor

    this.cancelAddStand();
  }

  private getStands() {

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
