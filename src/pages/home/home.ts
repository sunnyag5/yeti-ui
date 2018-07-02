import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SharePage } from "../share/share";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToNextPage() {
    this.navCtrl.push(SharePage);
  }

}
