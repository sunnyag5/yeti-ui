import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AttendingPage } from "../pages/attending/attending";
import { CityPage } from "../pages/city/city";
import { ContactPage } from '../pages/contact/contact';
import { EventPage } from "../pages/event/event";
import { EventLocationPage } from "../pages/event-location/event-location";
import { EventlistPage } from "../pages/eventlist/eventlist";
import { FilterPage } from "../pages/filter/filter";
import { HashtagPage } from "../pages/hashtag/hashtag";
import { HomePage } from '../pages/home/home';
import { Line_2SubwayPage } from "../pages/line-2-subway/line-2-subway";
import { LoginPage } from "../pages/login/login";
import { PurchaseDetailPage } from "../pages/purchase-detail/purchase-detail";
import { ReviewsPage } from "../pages/reviews/reviews";
import { RoutesPage } from "../pages/routes/routes";
import { SharePage } from "../pages/share/share";
import { SignupPage } from "../pages/signup/signup";
import { TabsPage } from '../pages/tabs/tabs';
import { TicketDetailPage } from "../pages/ticket-detail/ticket-detail";
import { TicketConfirmDetailPage } from "../pages/ticket-confirm-detail/ticket-confirm-detail";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AttendingPage,
    CityPage,
    ContactPage,
    EventPage,
    EventLocationPage,
    EventlistPage,
    FilterPage,
    HashtagPage,
    HomePage,
    Line_2SubwayPage,
    LoginPage,
    PurchaseDetailPage,
    ReviewsPage,
    RoutesPage,
    SharePage,
    SignupPage,
    TabsPage,
    TicketDetailPage,
    TicketConfirmDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AttendingPage,
    CityPage,
    ContactPage,
    EventPage,
    EventLocationPage,
    EventlistPage,
    FilterPage,
    HashtagPage,
    HomePage,
    Line_2SubwayPage,
    LoginPage,
    PurchaseDetailPage,
    ReviewsPage,
    RoutesPage,
    SharePage,
    SignupPage,
    TabsPage,
    TicketDetailPage,
    TicketConfirmDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
