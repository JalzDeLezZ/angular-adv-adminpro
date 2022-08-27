import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private tagTheme_header = document.querySelector('#theme');

  constructor() {
    const url =
      localStorage.getItem('theme') || './assets/css/colors/megna-dark.css';
    this.tagTheme_header?.setAttribute('href', url);
  }

  act_changeTheme(pTheme: string) {
    const url = `./assets/css/colors/${pTheme}.css`;
    this.tagTheme_header?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.act_CheckCurrentTheme();
  }

  act_CheckCurrentTheme() {
    const tagsTheme : NodeListOf<Element> = document.querySelectorAll('.selector');

    tagsTheme.forEach((pI) => {
      pI.classList.remove('working');

      const tag_a = pI.getAttribute('data-theme'); // get value of data-theme
      const urlSelected = `./assets/css/colors/${tag_a}.css`;
      const currentTheme = this.tagTheme_header?.getAttribute('href');

      if (urlSelected === currentTheme) {
        pI.classList.add('working');
      }
    });
  }
}
