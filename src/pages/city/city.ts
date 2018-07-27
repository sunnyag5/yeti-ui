import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EventLocationPage } from "../event-location/event-location";
import { HashtagPage } from "../hashtag/hashtag";

/**
 * Generated class for the CityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
})
export class CityPage {

  public isSearchbarOpened = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityPage');
  }

  setHashTag() {
    this.navCtrl.push(HashtagPage);
  }

    getLocationMap() {
      this.navCtrl.setRoot(EventLocationPage);
    }

}
