import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketConfirmDetailPage } from './ticket-confirm-detail';

@NgModule({
  declarations: [
    TicketConfirmDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketConfirmDetailPage),
  ],
})
export class TicketConfirmDetailPageModule {}
