import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PurchaseDetailPage } from "../purchase-detail/purchase-detail";

/**
 * Generated class for the TicketConfirmDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket-confirm-detail',
  templateUrl: 'ticket-confirm-detail.html',
})
export class TicketConfirmDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketConfirmDetailPage');
  }

  goBack() {
    this.navCtrl.setRoot(PurchaseDetailPage);
  }

}
