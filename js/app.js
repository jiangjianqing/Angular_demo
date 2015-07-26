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
		//��Ϊroute�ǵ�����һ��ģ�飬����������ʵ����appģ���ʱ����Ҫ��������ģ���б��м���route��module����ngRoute��
		var app=angular
			.module('myApp', ['ngRoute'])
			.controller('PhoneListCtrl', phoneCtrl);
		//�Ƿ����û���֪��
		app.config(['$routeProvider','$locationProvider',
			function($routeProvider,$locationProvider){
				//���Html5��historyģʽ������html5Mode(true)����
				//���������hash��ʽ����location�Ļ�����Ҫ������hashPrefix��Ĭ��Ϊ��
				$locationProvider.html5Mode(true).hashPrefix('!');
			}
		]);
		//angular.element(document).ready(function() {
		angular.bootstrap(document, ['myApp']);
		//});
	});	
});
