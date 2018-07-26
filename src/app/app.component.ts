import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AttendingPage } from "../pages/attending/attending";
import { CityPage } from "../pages/city/city";
import { ContactPage } from "../pages/contact/contact";
import { EventlistPage } from "../pages/eventlist/eventlist";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { SharePage } from "../pages/share/share";
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
