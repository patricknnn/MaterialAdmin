import { Component, OnInit } from '@angular/core';
import { StatsCard } from 'src/app/models/card-stats';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  statsCards: StatsCard[];

  constructor() { }

  ngOnInit(): void {
    this.statsCards = [new StatsCard('analitics', '22.250', 'Page Visits', 'today', 'Last 24 hours'),];
  }

}
