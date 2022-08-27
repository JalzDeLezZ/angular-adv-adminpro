import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  public tagTheme = document.querySelector('#theme');

  constructor() {}

  ngOnInit(): void {}
  changeTheme(pTheme: string) {
    const url = `./assets/css/colors/${pTheme}.css`;
    this.tagTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
  }
}
