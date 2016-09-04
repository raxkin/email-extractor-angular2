import { Component, OnInit } from '@angular/core';
import {EmailFinderService} from "../../services/email-finder.service";

@Component({
  moduleId: module.id,
  selector: 'app-email-scraper',
  templateUrl: 'email-scraper.component.html',
  styleUrls: ['email-scraper.component.css']
})
export class EmailScraperComponent implements OnInit {
  config = {
    url: 'https://services.tetrao.eu/',
    noRepeat: false
  };

  result = null;
  showError = '';
  loading = false;

  constructor(private emailFinder: EmailFinderService) {
  }

  onFindEmails() {
    this.loading = true;
    this.emailFinder.getEmails(this.config.url, this.config.noRepeat)
      .subscribe(
        emails => {
          this.loading = false;
          this.result = emails;
          this.showError = '';
        },
        err => {
          this.loading = false;
          this.result = null;
          this.showError = 'There was a problem finding the emails!';
          console.log(err);
        }
      );
  }

  ngOnInit() {
  }

}
