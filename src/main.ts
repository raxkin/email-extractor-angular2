import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {HTTP_PROVIDERS} from "@angular/http";
import {EmailFinderService} from "./app/services/email-finder.service";


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  ...HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  EmailFinderService
]);
