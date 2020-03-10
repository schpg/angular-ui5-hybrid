import {Component, Input} from '@angular/core';
import {Ui5EventBusService} from './ui5-event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() appUrl = './assets/ui5app';
  @Input() appNamespace = 'de.exxcellent.school.ui5';

  constructor(private eventBus: Ui5EventBusService) {
  }

  startUi5App() {
    this.eventBus.publish('loadComponent', {
      name: this.appNamespace,
      url: this.appUrl
    });
  }
}
