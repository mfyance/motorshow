import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Stand } from '../../commons/models/stand.model';

@Component({
  selector: 'app-branch-admins',
  templateUrl: './branch-admins.component.html',
  styleUrls: ['./branch-admins.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BranchAdminsComponent implements OnInit {

  public isAddBranchAdmins: boolean;
  public dataSource: MatTableDataSource<Stand>;
  public displayedColumns: string[];

  constructor() { 

    this.isAddBranchAdmins = false;
    this.displayedColumns = ['id', 'imagen1', 'imagen2', 'gif', 'video', 'logo', 'actions'];
  }

  ngOnInit(): void {

    this.getBranchAdminss();
  }

  public addBranchAdmins() {

    this.isAddBranchAdmins = true;
  }
  
  public cancelAddBranchAdmins() {

    this.isAddBranchAdmins = false;
  }

  public saveBranchAdmins() {

    // guardar expositor

    this.cancelAddBranchAdmins();
  }

  private getBranchAdminss() {

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
