import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedItem: MenuItem;

  items: MenuItem[] = [
    {
      title: "Home",
    },
    {
      title: "Admin",
    },
    {
      title: "About",
    },
  ];

  constructor() {
    this.selectedItem = null;
  }

  selectItem(item: MenuItem) {
    if(this.selectedItem) {
      this.selectedItem.selected = false;
    }

    this.selectedItem = item;

    this.selectedItem.selected = true;
  }
}

interface MenuItem {
  title: string;
  selected?: boolean;
}
