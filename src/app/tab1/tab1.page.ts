import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NavMenuPage } from '../nav-menu/nav-menu.page';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router, public modalCtrl: ModalController,) { }

  navMenu() {
    this.router.navigate(['/tabs/menu']);
  }


}
