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
    return ['$scope','$http','$log','$timeout','phoneStorage',
        function ($scope,$http,$log,$timeout,phoneStorage) {
            $scope.phones = phoneStorage;
            $scope.showHello=function(){
                //在controller中调用alert会出现$apply...的错误
                //alert('Hello！这是ng-click测试。');
                $log.info("showHello调用成功,这里使用alert会产生$apply already...的错误");
            };
            $scope.orderProp="age";
            $scope.clock={
                now:new Date()
            };

            //$timeout与setTimeout作用相同，还可以不考虑闭包等问题
            //$timeout(function(){
            //    updateClock();
            //},1000);

            //timeout的使用方式
            //var timeout;
            //$scope.$watch('username', function(newUserName) {
            //    if (newUserName) {
            //        // 如果在进度中有一个超时(timeout)
            //        if (timeout) $timeout.cancel(timeout);
            //        timeout = $timeout(function() {
            //            githubService.events(newUserName)
            //                .success(function(data, status) {
            //                    $scope.events = data.data;
            //                });
            //        }, 350);
            //    }
            //});
            var timer;
            var updateClock=(function func(){
                $scope.clock.now=new Date();
                //var tmp=arguments.callee;严格模式下无法使用
                timer=$timeout(func,1000);
            });
            updateClock();
            $scope.$on('$destroy',function(){
                if(timer) $timeout.cancel(timer);
            });
            //var timer=setInterval(function(){
            //   updateClock();
                //$scope.$apply(updateClock);
            //},1000);

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
