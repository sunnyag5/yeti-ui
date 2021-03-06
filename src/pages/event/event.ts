import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AttendingPage } from "../attending/attending";
import { EventlistPage } from "../eventlist/eventlist";
import { ReviewsPage } from "../reviews/reviews";
import { SharePage } from "../share/share";
import { TicketDetailPage } from "../ticket-detail/ticket-detail";
import { RoutesPage } from "../routes/routes";

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  goBack() {
    this.navCtrl.setRoot(EventlistPage);
  }

  attendingUsers() {
    this.navCtrl.setRoot(AttendingPage);
  }

  shareEvent() {
    this.navCtrl.setRoot(SharePage);
  }

  getTicket() {
    this.navCtrl.setRoot(TicketDetailPage);
  }

  getRoutes() {
    this.navCtrl.setRoot(RoutesPage);
  }

  getReviews() {
    this.navCtrl.setRoot(ReviewsPage);
  }

}
