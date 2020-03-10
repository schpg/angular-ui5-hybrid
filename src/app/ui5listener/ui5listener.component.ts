import {Component, OnInit} from '@angular/core';
import {Ui5EventBusService} from '../ui5-event-bus.service';

@Component({
  selector: 'app-ui5listener',
  templateUrl: './ui5listener.component.html',
  styleUrls: ['./ui5listener.component.css']
})
export class Ui5listenerComponent implements OnInit {

  eventText: string;

  constructor(private eventBus: Ui5EventBusService) {
    this.eventText = '<empty>';
  }

  ngOnInit() {
    this.eventBus.subscribe('comm', (data: any) => {
      this.eventText = data.text;
    });
    this.eventText = 'initialized';
  }
}
