import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.page.html',
  styleUrls: ['./nav-menu.page.scss'],
})
export class NavMenuPage implements OnInit {
  activePage: any = '';
  constructor(public modalCtrl: ModalController, public router: Router,) { }

  ngOnInit() {
    this.activePage = localStorage.getItem('curPage');
    console.log(this.activePage);
    console.log('ahahh')
  }

  activeTab(page: any) {
    console.log(page);
    // this.storage.setString('curTab', page);
    localStorage.setItem('curPage', page);
    this.activePage = page;
  }

  navigatePage(page: any) {

    const pageCount = page.slice(-1);
    localStorage.setItem('curPage', pageCount);
    console.log(pageCount);
    this.activePage = pageCount;
    this.router.navigate(['/tabs/' + page]);
    this.modalCtrl.dismiss();
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
