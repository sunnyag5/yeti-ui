import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventPage } from "../event/event";
import { Line_2SubwayPage } from "../line-2-subway/line-2-subway";

/**
 * Generated class for the RoutesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-routes',
  templateUrl: 'routes.html',
})
export class RoutesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoutesPage');
  }

  goBack() {
    this.navCtrl.setRoot(EventPage);
  }

  checkRoute() {
    this.navCtrl.setRoot(Line_2SubwayPage);
  }

}
