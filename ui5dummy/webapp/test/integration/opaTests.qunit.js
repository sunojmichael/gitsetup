/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"dummy/ui5dummy/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});