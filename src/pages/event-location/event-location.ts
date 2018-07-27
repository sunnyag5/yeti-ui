import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CityPage } from "../city/city";


/**
 * Generated class for the EventLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-location',
  templateUrl: 'event-location.html',
})
export class EventLocationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventLocationPage');
  }

  goBack() {
    this.navCtrl.setRoot(CityPage);
  }

}
