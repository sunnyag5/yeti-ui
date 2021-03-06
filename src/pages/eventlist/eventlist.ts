import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventPage } from "../event/event";
import { FilterPage } from "../filter/filter";

/**
 * Generated class for the EventlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventlist',
  templateUrl: 'eventlist.html',
})
export class EventlistPage {

  plan: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.plan = "you";
    console.log('ionViewDidLoad EventlistPage');
  }

  filterEvent() {
    this.navCtrl.setRoot(FilterPage);
  }

    getEventInfo() {
      this.navCtrl.setRoot(EventPage);
    }

}
