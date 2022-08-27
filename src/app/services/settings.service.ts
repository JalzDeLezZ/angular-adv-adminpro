import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {

  private tagTheme_header = document.querySelector('#theme');

  constructor() {

    const url = localStorage.getItem('theme') || './assets/css/colors/megna-dark.css';
    this.tagTheme_header?.setAttribute('href', url);
  }


  act_changeTheme(pTheme: string) {
    const url = `./assets/css/colors/${pTheme}.css`;
    this.tagTheme_header?.setAttribute('href', url);
    localStorage.setItem('theme', url);
  }

}
