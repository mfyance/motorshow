import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from '../../commons/models/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsComponent implements OnInit {

  public isAddClient: boolean;
  public dataSource: MatTableDataSource<Client>;
  public displayedColumns: string[];

  constructor() { 

    this.isAddClient = false;
    this.displayedColumns = ['id', 'imagen1', 'imagen2', 'gif', 'video', 'logo', 'actions'];
  }

  ngOnInit(): void {

    this.getClients();
  }

  public addClient() {

    this.isAddClient = true;
  }
  
  public cancelAddClient() {

    this.isAddClient = false;
  }

  public saveClient() {

    // guardar expositor

    this.cancelAddClient();
  }

  private getClients() {

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
