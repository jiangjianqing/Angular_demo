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
    return ['$scope','$http','phoneStorage',
        function ($scope,$http,phoneStorage) {
            $scope.phones = phoneStorage;
            $scope.showHello=function(){
                alert('Hello！这是ng-click测试。');
            };
            $scope.orderProp="age";

            $scope.clock=new Date();
            var updateClock=function(){
                $scope.clock=new Date();
            };
            var timer=setInterval(function(){
                $scope.$apply(updateClock);
            },1000);

            $http({
                method: 'JSONP',
                url: 'https://api.github.com/events?callback=JSON_CALLBACK'
            }).success(function(data, status, headers, config) {
                //console.log(data);
                // data contains the response
                // status is the HTTP status
                // headers is the header getter function
                // config is the object that was used to create the HTTP request
            }).error(function(data, status, headers, config) {
            });
        }
    ];
});
