import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  public isWebAdmin: boolean;
  public isExpositionAdmin: boolean;
  public isBranchAdmin: boolean;
  public isExecutive: boolean;
  public isUsers:boolean;

  constructor() {

    this.isBranchAdmin = false;
    this.isExpositionAdmin = false;
    this.isWebAdmin = false;
    this.isExecutive= false;
    this.isUsers=true;
  }

  ngOnInit(): void {
  }

}
