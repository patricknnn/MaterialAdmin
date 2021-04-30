import { Component, OnInit } from '@angular/core';
import { StatsCard } from 'src/app/models/card-stats';
import { SwalService } from 'src/app/services/swal.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  statsCards: StatsCard[];

  constructor(private swalService: SwalService) { }

  ngOnInit(): void {
    this.statsCards = [new StatsCard('analitics', '22.250', 'Page Visits', 'today', 'Last 24 hours'),];
  }

  showLoadingSwal(): void {
    // loading swal
    this.swalService.loadingSwal("loading");
  }

  showCancelSwal(): void {
    // loading swal
    this.swalService.cancelSwal();
  }

  showSuccesSwal(): void {
    // loading swal
    this.swalService.successSwal();
  }

  showPomptSwal(): void {
    this.swalService.promptSwal("This is a prompt Sweet Alert, continue?").then((result) => {
      if (result.value) {
        this.swalService.successSwal();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.swalService.cancelSwal();
      }
    });
  }

}
