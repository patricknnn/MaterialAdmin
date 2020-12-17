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
  @ViewChild('sidenav') public sidenav: MatSidenav;
  private _mobileQueryListener: () => void;
  title = 'Anker Seacrew';
  mobileQuery: MediaQueryList;
  public simplebarOptions: object;

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
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener<"change">("change", this._mobileQueryListener);
    this.simplebarOptions = {autoHide: false};
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