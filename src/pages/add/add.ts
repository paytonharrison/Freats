import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddnowPage } from '../addnow/addnow';
import { AddeventPage } from '../addevent/addevent';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  addnowSelected(){
    this.navCtrl.push(AddnowPage);
  }

  addeventSelected(){
    this.navCtrl.push(AddeventPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
