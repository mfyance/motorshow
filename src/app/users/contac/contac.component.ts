import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContacComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
