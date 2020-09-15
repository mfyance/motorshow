import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from '../../commons/models/client.model';

@Component({
  selector: 'app-auditorium-talk',
  templateUrl: './auditorium-talk.component.html',
  styleUrls: ['./auditorium-talk.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuditoriumTalkComponent implements OnInit {

  public isAddAuditoriumTalk: boolean;
  public dataSource: MatTableDataSource<Client>;
  public displayedColumns: string[];

  constructor() { 

    this.isAddAuditoriumTalk = false;
    this.displayedColumns = ['id', 'imagen1', 'imagen2', 'gif', 'video', 'logo', 'actions'];
  }

  ngOnInit(): void {

    this.getAuditoriumTalks();
  }

  public addAuditoriumTalk() {

    this.isAddAuditoriumTalk = true;
  }
  
  public cancelAddAuditoriumTalk() {

    this.isAddAuditoriumTalk = false;
  }

  public saveAuditoriumTalk() {

    // guardar expositor

    this.cancelAddAuditoriumTalk();
  }

  private getAuditoriumTalks() {

    const data: Array<Client> = [
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
