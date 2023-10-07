import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@Component({
    selector: 'app-ability-tile',
    templateUrl: './ability-tile.component.html',
    styleUrls: ['./ability-tile.component.scss'],
    standalone: true,
    imports: [MatCardModule]
})
export class AbilityTileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
