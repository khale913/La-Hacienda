import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  menuTabs: any = ['Appetizers & Salads', 'Botanas Mexicanas', 'Burritos', 'Cocktails', 'Combination Plate', 'Chimichangas', 'Enchiladas', 'Quesadillas', 'Tortas', 'Quesadillas De Masa', 'Seafood', 'Fajitas', 'Quesadillas De Masa', 'Seafood', 'Fajitas']
  activeTab: string = 'Appetizers & Salads';
  constructor() { }

  ngOnInit() {
  }

  setActiveTab(btn) {
    this.activeTab = btn;
    console.log(btn);
  }
}
