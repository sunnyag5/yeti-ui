import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendingPage } from './attending';

@NgModule({
  declarations: [
    AttendingPage,
  ],
  imports: [
    IonicPageModule.forChild(AttendingPage),
  ],
})
export class AttendingPageModule {}
