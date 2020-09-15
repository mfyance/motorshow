import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-validate-config',
  templateUrl: './validate-config.component.html',
  styleUrls: ['./validate-config.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidateConfigComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
