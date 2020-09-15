import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-validate-client',
  templateUrl: './validate-client.component.html',
  styleUrls: ['./validate-client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidateClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
