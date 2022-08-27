import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  public tagTheme_header = document.querySelector('#theme');
  public tagsTheme: NodeListOf<Element> =
    document.querySelectorAll('.selector');

  constructor(
    private _settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    this.tagsTheme = document.querySelectorAll('.selector');
    this.mCheckCurrentTheme();
  }

  changeTheme(pTheme: string) {
    this._settingsService.act_changeTheme(pTheme);
    this.mCheckCurrentTheme();
  }

  mCheckCurrentTheme() {
    this.tagsTheme.forEach((pI) => {
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
