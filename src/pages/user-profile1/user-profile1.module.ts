import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfile1Page } from './user-profile1';

@NgModule({
  declarations: [
    UserProfile1Page,
  ],
  imports: [
    IonicPageModule.forChild(UserProfile1Page),
  ],
})
export class UserProfile1PageModule {}
