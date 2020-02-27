import { Component, OnInit } from '@angular/core';
declare var sap: any;
declare global {
  interface Window {
    ui5EventBus: any;
  }
}

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.css']
})
export class LaunchpadComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const ui5ScriptTag = document.createElement('script');
    ui5ScriptTag.src = 'https://openui5.hana.ondemand.com/1.56.14/resources/sap-ui-core.js';
    ui5ScriptTag.id = 'sap-ui-bootstrap';
    ui5ScriptTag.setAttribute('data-sap-ui-libs', 'sap.ui.commons,sap.ui.ux3,sap.m,sap.uxap,sap.tnt');
    ui5ScriptTag.setAttribute('data-sap-ui-theme', 'sap_bluecrystal');
    const bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.appendChild(ui5ScriptTag);

    const createComponent = (container, data) => {
      const component = sap.ui.getCore().createComponent(data.name, data.url);
      container.setComponent(component);
    };

    ui5ScriptTag.onload = () => {
      const oCore = sap.ui.getCore();
      const eventBus = oCore.getEventBus();
      window.ui5EventBus = eventBus;
      oCore.attachInit(() => {
        console.log('OpenUI5 Libraries loaded');
        const ui5contentdiv = document.getElementById('ui5content');
        const componentContainer = new sap.ui.core.ComponentContainer({
          width: '100%',
          height: '100%'
        });
        componentContainer.placeAt(ui5contentdiv);

        eventBus.subscribe('UI5Launchpad', 'loadComponent', (channel, eventId, data) => {
          createComponent(componentContainer, data);
        });
      });
    }
  }
}
