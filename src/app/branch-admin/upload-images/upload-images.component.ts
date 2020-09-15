import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadImagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
