sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";
  return Controller.extend("de.exxcellent.school.ui5.controller.Detail", {

    onInit: function () {
    },

    sendMessage: function () {
      sap.ui.getCore().getEventBus().publish('Main_Channel', 'Button_Event', {
        text: 'Message from Detail'
      });
    },

    navBack: function () {
      sap.ui.core.UIComponent.getRouterFor(this).navTo("start");
    }
  });
});
