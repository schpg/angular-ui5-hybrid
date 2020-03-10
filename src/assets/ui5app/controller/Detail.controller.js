sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";
  return Controller.extend("de.exxcellent.school.ui5.controller.Detail", {

    sendMessage: function () {
      sap.ui.getCore().getEventBus().publish('UI5Launchpad', 'ui5ToAngular', {
        text: 'Message from Detail'
      });
    },

    navBack: function () {
      sap.ui.core.UIComponent.getRouterFor(this).navTo("start");
    }
  });
});
