import { Component, OnInit } from '@angular/core';
declare var sap: any;

@Component({
  selector: 'app-ui5form',
  templateUrl: './ui5form.component.html',
  styleUrls: ['./ui5form.component.css']
})
export class Ui5formComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const ui5ScriptTag = document.createElement('script');
    ui5ScriptTag.src = 'https://openui5.hana.ondemand.com/1.56.14/resources/sap-ui-core.js';
    ui5ScriptTag.id = 'sap-ui-bootstrap';
    ui5ScriptTag.setAttribute('data-sap-ui-libs', 'sap.ui.commons,sap.ui.ux3,sap.m,sap.uxap,sap.tnt');
    ui5ScriptTag.setAttribute('data-sap-ui-theme', 'sap_bluecrystal');
    const bodyElememt = document.getElementsByTagName('body')[0];
    bodyElememt.appendChild(ui5ScriptTag);

    const that = this;
    ui5ScriptTag.onload = function () {
      const oCore = sap.ui.getCore();
      const eventBus = oCore.getEventBus();
      window.ui5EventBus = eventBus;
      oCore.attachInit(function () {
        console.log('OpenUI5 Libraries loaded');
        const ui5contentdiv = document.getElementById('ui5form');
        const oLayout = new sap.ui.commons.layout.MatrixLayout({
          width: '100%',
          widths: ['15%', '20%', '40%', '15%']
        });
        const oLabel1 = new sap.ui.commons.Label({text: 'First Name: '});
        const oTF1 = new sap.ui.commons.TextField({id: 'firstName'});
        const oLabel2 = new sap.ui.commons.Label({text: 'Last Name: '});
        const oTF2 = new sap.ui.commons.TextField({id: 'lastName'});
        const oLabel3 = new sap.ui.commons.Label({text: 'Age: '});
        const oTF3 = new sap.ui.commons.TextField({id: 'age'});
        const oButton = new sap.ui.commons.Button({text: 'Submit'});
        oButton.attachPress(function () {
          eventBus.publish('Main_Channel', 'Button_Event', {
            text: oTF1.getValue()
          });
        });
        const oLabelEvent = new sap.ui.commons.Label({text: 'Event data: '});
        const oEventData = new sap.ui.commons.Label({text: ''});
        oLayout.createRow(null, null, null, null);
        oLayout.createRow(null, oLabel1, oTF1, null);
        oLayout.createRow(null, oLabel2, oTF2, null);
        oLayout.createRow(null, oLabel3, oTF3, null);
        oLayout.createRow(null, null, null, null);
        oLayout.createRow(null, null, oButton, null);
        oLayout.createRow(null, oLabelEvent, oEventData, null);
        oLayout.placeAt(ui5contentdiv);

        eventBus.subscribe('Main_Channel', 'Button_Event', function (channel, eventId, parameter) {
          oEventData.setText(parameter.text);
        }, this);
      });
    }
  }
}
