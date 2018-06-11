import { Component } from '@angular/core';
import { NavItem } from 'angular2component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navItems: NavItem[] = []
  constructor() {
    this.initNavItems();
  }
  private initNavItems() {
    this.navItems = [{
      label: 'Event List',
      path: '/list'
    }, {
      label: 'Add Event',
      path: '/add-event'
    }];
  }
}
