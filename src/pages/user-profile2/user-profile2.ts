import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { NotificationsPage } from "../notifications/notifications";

/**
 * Generated class for the UserProfile2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile2',
  templateUrl: 'user-profile2.html',
})
export class UserProfile2Page {

    activities: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
      this.activities = 'activity';
    console.log('ionViewDidLoad UserProfile2Page');
  }

    goBack() {
        this.navCtrl.setRoot(LoginPage);
    }

  getNotifications() {
      this.navCtrl.push(NotificationsPage);
  }

}
