import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';
import { EventdPage } from '../eventd/eventd';
import { AddnowPage } from '../addnow/addnow';
import { AddeventPage } from '../addevent/addevent';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];
  events: any[];

  constructor(public navCtrl: NavController) {
    this.items = [];
    this.events = [];
    this.items.push({
      text: 'Cricket Cookies',
      id: 1
    });
    this.items.push({
      text: 'Tacos!',
      id: 2
    });
    this.items.push({
      text: 'Clam Chowder...',
      id: 3
    });

    this.events.push({
      text: 'Cricket Cookies!',
      pic: '../../assets/imgs/cricket.jpeg',
      descrip: 'We have done the unthinkable! Put crickets in cookies!'
    });
    this.events.push({
      text: 'Pancake People',
      pic: '../../assets/imgs/pancakes.jpg',
      descrip: "Come and get 'em while they're hot!"
    });
    this.events.push({
      text: 'Taco Tazer!',
      pic: '../../assets/imgs/taco.jpeg',
      descrip: 'Come grab a taco and test out a brand-new style of tazer!'
    });
    this.events.push({
      text: 'Green Gases',
      pic: '../../assets/imgs/greenSmoothie.jpg',
      descrip: 'Taste and see...'
    });
  }

  itemSelected(item){
    this.navCtrl.push(DetailPage, {
      item: item
    });
  }

  eventSelected(event){
    this.navCtrl.push(EventdPage, {
      event: event
    });
  }

  addnowSelected(){
    this.navCtrl.push(AddnowPage);
  }

  addeventSelected(){
    this.navCtrl.push(AddeventPage);
  }



}
