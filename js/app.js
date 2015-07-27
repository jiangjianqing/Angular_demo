/*global require*/
'use strict';

require([
	'angular',
	'angularRoute'
], function (angular) {
	require([
		'controllers/todo',
		'controllers/phone',
		'directives/hello',
		'directives/todoFocus', 
		'directives/todoEscape',
		'services/todoStorage',
		'services/phoneStorage',
		'filters/capitalize'
	], function (todoCtrl,phoneCtrl,helloDir, todoFocusDir, todoEscapeDir, todoStorageSrv,phoneStorageSrv,capitalizeFilter) {
		//angular
		//	.module('todomvc', [todoFocusDir, todoEscapeDir, todoStorageSrv])
		//	.controller('TodoController', todoCtrl);
		//因为route是单独的一个模块，所以在咱们实例化app模块的时候，需要在依赖的模块列表中加上route的module名“ngRoute”
		var app=angular
			.module('myApp', ['ngRoute',helloDir,capitalizeFilter,phoneStorageSrv])
			.controller('PhoneListCtrl', phoneCtrl);
		//自定义一个名为focus的directive，可以用来将input设为focus
		app.directive('focus',function(){
			return {
				link:function(scope,element,attrs){
					element[0].focus();
				}
			}
		});

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
