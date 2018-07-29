import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventPage } from "../event/event";
import { PurchaseDetailPage } from "../purchase-detail/purchase-detail";

/**
 * Generated class for the TicketDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket-detail',
  templateUrl: 'ticket-detail.html',
})
export class TicketDetailPage {

  date: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.date = "5Aug";
    console.log('ionViewDidLoad TicketDetailPage');
  }

  goBack() {
    this.navCtrl.setRoot(EventPage);
  }

  purchaseTicket() {
    this.navCtrl.setRoot(PurchaseDetailPage);
  }

}
