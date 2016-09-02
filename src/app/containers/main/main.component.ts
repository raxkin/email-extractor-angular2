import { Component, OnInit } from '@angular/core';
import {AppBarComponent} from "../../ui/app-bar/app-bar.component";
import {EmailScraperComponent} from "../email-scraper/email-scraper.component";

@Component({
  moduleId: module.id,
  selector: 'app-main',
  directives: [
    AppBarComponent,
    EmailScraperComponent
  ],
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
