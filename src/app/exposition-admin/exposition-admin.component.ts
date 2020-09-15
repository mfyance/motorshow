import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-exposition-admin',
  templateUrl: './exposition-admin.component.html',
  styleUrls: ['./exposition-admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpositionAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
