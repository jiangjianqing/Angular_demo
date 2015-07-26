/*global require*/
'use strict';

require([
	'angular',
	'angularRoute'
], function (angular) {
	require([
		'controllers/todo',
		'controllers/phone',
		'directives/todoFocus', 
		'directives/todoEscape',
		'services/todoStorage'
	], function (todoCtrl,phoneCtrl, todoFocusDir, todoEscapeDir, todoStorageSrv) {
		//angular
		//	.module('todomvc', [todoFocusDir, todoEscapeDir, todoStorageSrv])
		//	.controller('TodoController', todoCtrl);
		//因为route是单独的一个模块，所以在咱们实例化app模块的时候，需要在依赖的模块列表中加上route的module名“ngRoute”
		var app=angular
			.module('myApp', ['ngRoute'])
			.controller('PhoneListCtrl', phoneCtrl);
		//是否有用还不知道
		app.config(['$routeProvider','$locationProvider',
			function($routeProvider,$locationProvider){
				//针对Html5的history模式，设置html5Mode(true)即可
				//如果当是以hash方式更新location的话，需要设置下hashPrefix，默认为空
				$locationProvider.html5Mode(true).hashPrefix('!');
			}
		]);
		//angular.element(document).ready(function() {
		angular.bootstrap(document, ['myApp']);
		//});
	});	
});
