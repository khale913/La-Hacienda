import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {
  activeReview: string = 'slc';
  constructor() { }

  ngOnInit() {
  }

  switchReview(rev: string) {
    this.activeReview = rev;
  }

}
