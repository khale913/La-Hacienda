import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  activePage: any = '';

  constructor(public router: Router,) { }

  navigateHome() {
    this.router.navigate(['/tabs/tab1']);
    localStorage.setItem('curPage', '6');
    this.activePage = '6';
  }

  activeTab(page: any) {
    console.log(page);
    // this.storage.setString('curTab', page);
    localStorage.setItem('curPage', page);
    this.activePage = page;
  }

}
