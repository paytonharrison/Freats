import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AddeventPage } from '../pages/addevent/addevent';
import { AddnowPage } from '../pages/addnow/addnow';
import { AddPage } from '../pages/add/add';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { DetailPage } from '../pages/detail/detail';
import { EventdPage } from '../pages/eventd/eventd';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AddeventPage,
    AddnowPage,
    AddPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailPage,
    EventdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddeventPage,
    AddnowPage,
    AddPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailPage,
    EventdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
