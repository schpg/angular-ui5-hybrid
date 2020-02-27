import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Launchpad';

  startUi5App() {
    window.ui5EventBus.publish('UI5Launchpad', 'loadComponent', {
      name: 'de.exxcellent.school.ui5',
      url: '../assets/ui5app'
    });
  }
}
