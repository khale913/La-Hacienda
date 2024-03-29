import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { IonicModule } from '@ionic/angular';

import { Tab6PageRoutingModule } from './tab6-routing.module';

import { Tab6Page } from './tab6.page';
import { FooterComponent } from '../footer/footer.component';
@NgModule({
  imports: [
    CommonModule,
    LazyLoadImageModule,
    FormsModule,
    IonicModule,
    Tab6PageRoutingModule
  ],
  declarations: [Tab6Page, FooterComponent]
})
export class Tab6PageModule { }
