import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TicketDetailPage } from "../ticket-detail/ticket-detail";

/**
 * Generated class for the PurchaseDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-purchase-detail',
  templateUrl: 'purchase-detail.html',
})
export class PurchaseDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseDetailPage');
  }

  goBack() {
    this.navCtrl.setRoot(TicketDetailPage);
  }

}
