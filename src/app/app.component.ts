import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { fadeAnimation } from './animations/route-animations';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'Material Admin';
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  @ViewChild('sidenav')
  public sidenav: MatSidenav;

  /**
   * Constructor
   * @param changeDetectorRef Change detector
   * @param media Media
   * @param sidenavService Sidenav service 
   */
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private sidenavService: SidenavService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener<"change">("change", this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener<"change">("change", this._mobileQueryListener);
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}