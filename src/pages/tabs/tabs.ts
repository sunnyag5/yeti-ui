import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { CityPage } from "../city/city";
import { ContactPage } from '../contact/contact';
import { EventlistPage } from "../eventlist/eventlist";
import { HomePage } from '../home/home';
import { LoginPage } from "../login/login";
import { SharePage } from "../share/share";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
    public tab1Root;
    public tab2Root;
    public tab3Root;
    public tab4Root;
    public tab5Root;
    public tab6Root;
    constructor() {
        this.tab1Root = HomePage;
        this.tab2Root = LoginPage;
        this.tab3Root = CityPage;
        this.tab4Root = EventlistPage;
        this.tab5Root = ContactPage;
        this.tab6Root = SharePage;
    }
}
