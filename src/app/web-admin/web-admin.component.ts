import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-web-admin',
  templateUrl: './web-admin.component.html',
  styleUrls: ['./web-admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
