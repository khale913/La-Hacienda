import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NavMenuPage } from '../nav-menu/nav-menu.page';
;
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  activePage: any = '';

  constructor(public router: Router, public modalCtrl: ModalController) { }

  // CREATION OF POPUP MODAL ONCLICK add brand
  async initModal(e: any) {
    const modal = await this.modalCtrl.create({
      component: NavMenuPage,
      componentProps: {
      },

    });
    console.log(e);
    await modal.present();
    return;
  }

  navigateHome() {
    this.router.navigate(['/tabs/tab1']);
    localStorage.setItem('curPage', '1');
    this.activePage = '1';
  }

  activeTab(page: any) {
    console.log(page);
    // this.storage.setString('curTab', page);
    localStorage.setItem('curPage', page);
    this.activePage = page;

    if (this.activePage === '3') {
      this.router.navigate(['/tabs/tab3'])
    }
  }

  navigatePage(page: any) {
    const pageCount = page.slice(-1);
    console.log(pageCount);
    this.activePage = pageCount;
    this.router.navigate(['/tabs/' + page]);
    this.modalCtrl.dismiss();
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
