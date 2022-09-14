import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(public router: Router, public modalCtrl: ModalController) { }

  ngOnInit() { }

  pageRoute(page) {
    if (page === 'about') {
      this.router.navigate(['/tabs/tab6']);
    }

    if (page === 'contact') {
      this.router.navigate(['/tabs/tab5']);
    }

    if (page === 'careers') {
      this.router.navigate(['/tabs/tab4']);
    }

    if (page === 'review') {
      this.router.navigate(['/tabs/review']);
    }
  }

}
