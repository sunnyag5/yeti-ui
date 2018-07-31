import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutesPage } from "../routes/routes";

/**
 * Generated class for the Line_2SubwayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-line-2-subway',
  templateUrl: 'line-2-subway.html',
})
export class Line_2SubwayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Line_2SubwayPage');
  }

    goBack() {
        this.navCtrl.setRoot(RoutesPage);
    }

}
