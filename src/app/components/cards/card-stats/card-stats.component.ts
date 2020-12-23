import { Component, Input, OnInit } from '@angular/core';
import { StatsCard } from 'src/app/models/card-stats';

@Component({
  selector: 'app-card-stats',
  templateUrl: './card-stats.component.html',
  styleUrls: ['./card-stats.component.scss']
})
export class CardStatsComponent implements OnInit {
  @Input() statsCard : StatsCard;
  
  constructor() { }

  ngOnInit(): void {
  }

}
