import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Ui5EventBusService} from '../ui5-event-bus.service';
declare var sap: any;

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.css']
})
export class LaunchpadComponent implements OnInit {

  @ViewChild('ui5content') private ui5Content: ElementRef;

  constructor(private renderer: Renderer2, private eventBus: Ui5EventBusService) {
  }

  ngOnInit() {
    this.initUi5Script();
  }

  initUi5Script() {
    const ui5Script = this.renderer.createElement('script');
    this.renderer.setProperty(ui5Script, 'id', 'sap-ui-bootstrap');
    this.renderer.setProperty(ui5Script, 'src', 'https://openui5.hana.ondemand.com/resources/sap-ui-core.js');
    this.renderer.setAttribute(ui5Script, 'data-sap-ui-libs', 'sap.m');
    this.renderer.setAttribute(ui5Script, 'data-sap-ui-async', 'true');
    this.renderer.setAttribute(ui5Script, 'data-sap-ui-theme', 'sap_fiori_3');
    ui5Script.onload = this.initUi5ComponentContainer.bind(this);
    this.renderer.appendChild(document.body, ui5Script);
  }

  initUi5ComponentContainer() {
    const loadComponent = (container: any, name: string, url: string) => {
      try {
        const component = sap.ui.getCore().createComponent(name, url);
        container.setComponent(component);
      } catch (error) {
        alert(error);
      }
    };

    const oCore = sap.ui.getCore();
    const eventBus = oCore.getEventBus();
    oCore.attachInit(() => {
      const componentContainer = new sap.ui.core.ComponentContainer({
        width: '100%',
        height: '100%'
      });
      componentContainer.placeAt(this.ui5Content.nativeElement);
      eventBus.subscribe('UI5Launchpad', 'ui5ToAngular', (channel, eventId, data) => {
        this.eventBus.publish('comm', data);
      });
      this.eventBus.subscribe('loadComponent', (data: any) => {
        loadComponent(componentContainer, data.name, data.url);
      });
    });
  }
}
