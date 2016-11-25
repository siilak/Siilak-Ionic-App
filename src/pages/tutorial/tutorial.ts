import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';


export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.slides = [
      {
        title: 'Welcome to <b>Siilak and Siilak</b>',
        description: 'Fugiat adipisicing sit minim deserunt consectetur laborum dolor non deserunt. Commodo dolore Lorem id ex enim esse esse pariatur elit ullamco culpa cupidatat anim. Esse ea laborum eu aliqua in elit non aute cillum quis consequat reprehenderit id. Sint adipisicing qui fugiat sit anim tempor ipsum elit pariatur laborum eiusmod laborum.',
        image: 'assets/img/video.mp4',
      },
      {
        title: 'Cur animalis unda?',
        description: 'Fugiat adipisicing sit minim deserunt consectetur laborum dolor non deserunt. Commodo dolore Lorem id ex enim esse esse pariatur elit ullamco culpa cupidatat anim. Esse ea laborum eu aliqua in elit non aute cillum quis consequat reprehenderit id. Sint adipisicing qui fugiat sit anim tempor ipsum elit pariatur laborum eiusmod laborum.',
        image: 'assets/img/video.mp4',
      },
      {
        title: 'Demolitiones ire!',
        description: 'Fugiat adipisicing sit minim deserunt consectetur laborum dolor non deserunt. Commodo dolore Lorem id ex enim esse esse pariatur elit ullamco culpa cupidatat anim. Esse ea laborum eu aliqua in elit non aute cillum quis consequat reprehenderit id. Sint adipisicing qui fugiat sit anim tempor ipsum elit pariatur laborum eiusmod laborum.',
        image: 'assets/img/video.mp4',
      }
    ];
  }

  startApp() {
    this.navCtrl.push(TabsPage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
