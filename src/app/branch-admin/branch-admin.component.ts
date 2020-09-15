import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-branch-admin',
  templateUrl: './branch-admin.component.html',
  styleUrls: ['./branch-admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BranchAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
