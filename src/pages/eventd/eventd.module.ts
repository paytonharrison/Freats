import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventdPage } from './eventd';

@NgModule({
  declarations: [
    EventdPage,
  ],
  imports: [
    IonicPageModule.forChild(EventdPage),
  ],
})
export class EventdPageModule {}
