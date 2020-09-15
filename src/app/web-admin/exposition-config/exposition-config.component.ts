import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-exposition-config',
  templateUrl: './exposition-config.component.html',
  styleUrls: ['./exposition-config.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpositionConfigComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
