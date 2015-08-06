/*global define*/
'use strict';

/**
 * Directive that places focus on the element it is applied to when the expression it binds to evaluates to true.
 */
 
define([
	'angular'
], function (angular) {
	var moduleName = 'TodoFocusDirective';
	angular
		.module(moduleName, [])
		.directive('todoFocus', ['$timeout', function ($timeout) {
			//当返回一个函数时，这个函数通常被称作链接传递（postLink）函数，利用它我们
			//可以定义指令的链接（link）功能。由于返回函数而不是对象会限制定义指令时的自由度，因此
			//只在构造简单的指令时才比较有用。
			return function (scope, elem, attrs) {
				var unRegisterWatchFn=scope.$watch(attrs.todoFocus, function (newVal,oldVal,scope) {
					if (newVal) {
						$timeout(function () {
							elem[0].focus();
						}, 0, false);
					}
				});
				scope.$on("$destroy",function(){
					unRegisterWatchFn();
				});
			};
		}]);
	return moduleName;
});
