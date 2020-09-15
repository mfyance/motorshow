import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-favorite-stands',
  templateUrl: './favorite-stands.component.html',
  styleUrls: ['./favorite-stands.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteStandsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
}
}
