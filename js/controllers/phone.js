/*global define*/
'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persist the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */

define([
    'angular'
], function (angular) {
    return ['$scope','phoneStorage',
        function ($scope,phoneStorage) {
            $scope.phones = phoneStorage;
            $scope.showHello=function(){
                alert('Hello！这是ng-click测试。');
            };
            $scope.orderProp="age";
        }
    ];
});
