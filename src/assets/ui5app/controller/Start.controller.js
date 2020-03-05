sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
  "use strict";
  return Controller.extend("de.exxcellent.school.ui5.controller.Start", {

    onInit: function () {
      this.getView().setModel(new JSONModel({
        text: '1234'
      }), 'dataModel');
    },

    sendMessage: function () {
      sap.ui.getCore().getEventBus().publish('Main_Channel', 'Button_Event', {
        text: this.getView().getModel('dataModel').getProperty('/text')
      });
    },

    navToDetail: function () {
      sap.ui.core.UIComponent.getRouterFor(this).navTo("detail");
    }
  });
});
