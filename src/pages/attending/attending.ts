import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventPage } from "../event/event";

/**
 * Generated class for the AttendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attending',
  templateUrl: 'attending.html',
})
export class AttendingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendingPage');
  }

    goBack() {
        this.navCtrl.setRoot(EventPage);
    }

}
