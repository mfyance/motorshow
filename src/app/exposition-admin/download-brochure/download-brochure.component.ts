import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-download-brochure',
  templateUrl: './download-brochure.component.html',
  styleUrls: ['./download-brochure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DownloadBrochureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
