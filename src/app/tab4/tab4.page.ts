import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  fileNameResume: any;
  fileNameCover: any;
  constructor() { }

  ngOnInit() {
  }

  onFileSelected(file, type) {
    console.log(file.target.files[0].name);

    if (type === 'resume') {
      this.fileNameResume = file.target.files[0].name;
    }

    if (type === 'cover') {
      this.fileNameCover = file.target.files[0].name;
    }

  }

}
