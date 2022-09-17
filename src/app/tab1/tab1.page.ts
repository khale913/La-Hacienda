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
  Imagedata: any = ['../../assets/images/facebookhomeimg.jpeg', '../../assets/images/tai-s-captures-JiRSy0GfqPA-unsplash.jpg', '../../assets/images/HardshellTacos.jpg'];
  startIndex: any = 1;
  constructor(public router: Router, public modalCtrl: ModalController,) { }

  ngOnInit() {
    this.repeat();
  }

  navMenu() {
    this.router.navigate(['/tabs/menu']);
  }

  navLocation() {
    this.router.navigate(['/tabs/tab3']);
  }

  repeat() {
    setTimeout(() => {
      this.functionSlide();
      this.repeat();
    }, 5000);
  }

  functionSlide() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
    if (slides === []) {
      this.repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }

}
