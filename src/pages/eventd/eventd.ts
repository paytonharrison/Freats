import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventd',
  templateUrl: 'eventd.html',
})
export class EventdPage {
  event: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = navParams.get('event');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventdPage');
  }

}
