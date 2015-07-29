/*global require*/
'use strict';

require.config({
	paths: {
		angular: '../node_modules/angular/angular',
		angularRoute: '../node_modules/angular-route/angular-route',
		angularMessages:'../node_modules/angular-messages/angular-messages',
		text: '../node_modules/requirejs/text'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		angularRoute: ['angular'],
		angularMessages:['angular']
	},
	priority: [
		"angular"
	],
	deps: ['app']
});
