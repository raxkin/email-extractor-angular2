import { Injectable } from '@angular/core';
import {Response, Http} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class EmailFinderService {
  constructor(private http: Http) {
  }

  //Regex to extract emails strings from a string
  private extractEmails(response: Response): Array<string> {
    return response.text().match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
  }

  private checkForError(response: Response): Response {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText);
      error['response'] = response;
      console.error(error);
      throw error;
    }
  }

  //Delete repeated emails
  private groupByName(emails: Array<string>, noRepeat: boolean) {
    if(noRepeat === true && emails !== null) {
      var uniqueEmails = [];
      emails.forEach(function (value) {
        if (uniqueEmails.indexOf(value) === -1) {
          uniqueEmails.push(value);
        }
      });
      return uniqueEmails;
    }
    return emails;
  }


  //Get the requested website and extract all the emails texts from the html
  getEmails(url: string, noRepeat: boolean): Observable<any> {
    return this.http.get(url)
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
      .map(this.extractEmails)
      .map(emails => this.groupByName(emails, noRepeat));
  }
}
