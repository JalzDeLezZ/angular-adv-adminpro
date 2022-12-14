import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    private _settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    this._settingsService.act_CheckCurrentTheme();
  }

  changeTheme(pTheme: string) {
    this._settingsService.act_changeTheme(pTheme);
  }
}
