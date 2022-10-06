import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StorageService } from './servies/storage.service';
import { AppRoutingModule } from './app-routing.module';
import { MenuPage } from './menu/menu.page';
import { AppComponent } from './app.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LazyLoadImageModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [StorageService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
