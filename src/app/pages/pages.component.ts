import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  public tagTheme = document.querySelector('#theme');

  constructor() {}

  ngOnInit(): void {
    const url = localStorage.getItem('theme') || './assets/css/colors/megna-dark.css';
    this.tagTheme?.setAttribute('href', url);
  }
}
