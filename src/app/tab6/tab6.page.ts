import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {
  image2 = '../../assets/images/jarritos-mexican-soda-E0txIcqePac-unsplash (1).jpg';
  image1 = '../../assets/images/LaHaciendaFood.jpg';
  defaultImage1 = 'https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';
  defaultImage2 = 'https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';


  constructor() { }

  ngOnInit() {
    console.log('about us');
  }

}

