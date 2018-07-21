import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { CityPage } from "../pages/city/city";
import { ContactPage } from '../pages/contact/contact';
import { EventPage } from "../pages/event/event";
import { EventlistPage } from "../pages/eventlist/eventlist";
import { FilterPage } from "../pages/filter/filter";
import { HashtagPage } from "../pages/hashtag/hashtag";
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { SharePage } from "../pages/share/share";
import { SignupPage } from "../pages/signup/signup";
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CityPage,
    ContactPage,
    EventPage,
    EventlistPage,
    FilterPage,
    HashtagPage,
    HomePage,
    LoginPage,
    SharePage,
    SignupPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CityPage,
    ContactPage,
    EventPage,
    EventlistPage,
    FilterPage,
    HashtagPage,
    HomePage,
    LoginPage,
    SharePage,
    SignupPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
