import { Component, OnInit } from '@angular/core';
import { Navlink } from 'src/app/models/navlink';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public navlinks: Navlink[];
  public simplebarOptions: object;

  constructor() {
    this.navlinks = [
      new Navlink("Dashboard", "dashboard", "/dashboard"),
      new Navlink("Typography", "format_size", "/typography"),
      new Navlink("Buttons & Menus", "check_box_outline_blank", "/buttons", [new Navlink("Buttons", "check_box", "/buttons"), new Navlink("Menus", "indeterminate_check_box", "/menus")]),
      new Navlink("Toolbars", "construction", "/toolbars"),
      new Navlink("Cards & Panels", "view_agenda", "/cards", [new Navlink("Cards", "check_box", "/cards"), new Navlink("Panels", "indeterminate_check_box", "/panels")]),
      new Navlink("Forms", "keyboard", "/forms"),
      new Navlink("Paginators", "last_page", "/paginators"),
      new Navlink("Steppers", "switch_right", "/steppers"),
      new Navlink("Tables", "table_chart", "/tables"),
      new Navlink("Tabs", "tab", "/tabs"),
      new Navlink("Dialogs", "chat", "/dialogs"),
      new Navlink("Progress indicators", "autorenew", "/progressindicators"),
      new Navlink("Icons", "insert_photo", "/icons"),
      new Navlink("Badges", "verified", "/badges"),
    ];
    this.simplebarOptions = {autoHide: true};
  }

  ngOnInit(): void {
  }

}
