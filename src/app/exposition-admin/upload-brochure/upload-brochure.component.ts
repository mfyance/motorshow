import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-upload-brochure',
  templateUrl: './upload-brochure.component.html',
  styleUrls: ['./upload-brochure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadBrochureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
