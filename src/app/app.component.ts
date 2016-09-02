import { Component } from '@angular/core';
import {MainComponent} from "./containers/main/main.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [
    MainComponent,
  ],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

}
