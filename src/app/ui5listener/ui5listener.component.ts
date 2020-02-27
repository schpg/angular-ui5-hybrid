import {Component, OnInit, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-ui5listener',
  templateUrl: './ui5listener.component.html',
  styleUrls: ['./ui5listener.component.css']
})
export class Ui5listenerComponent implements OnInit {

  eventText: string;

  constructor(private cdr: ChangeDetectorRef) {
    this.eventText = '<empty>';
  }

  ngOnInit() {
    this.eventText = 'in onInit...';
    setTimeout(() => {
      if (window.ui5EventBus) {
        window.ui5EventBus.subscribe('Main_Channel', 'Button_Event', (channel, event, data) => {
          this.eventText = data.text;
          this.cdr.detectChanges();
        });
        this.eventText = 'subscription done';
      } else {
        this.eventText = 'ui5-eventbus not available';
      }
    }, 5000);
    this.eventText = 'onInit done...';
  }

}
