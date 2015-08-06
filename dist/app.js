'use strict';

define([
	'angular'
	,'angularRoute'
    ,'angularMessages'

    ,'scripts/controllers/todo'
    ,'scripts/controllers/phone'
    ,'scripts/controllers/audio'
    ,'scripts/controllers/expr'
    ,'scripts/directives/hello'
    ,'scripts/directives/nprLink'
    ,'scripts/directives/todoFocus'
    ,'scripts/directives/todoEscape'
    ,'scripts/directives/ensureUnique'
    ,'scripts/services/todoStorage'
    ,'scripts/services/phoneStorage'
    ,'scripts/services/myInterpolate'
    ,'scripts/filters/capitalize'
], function(angular, angularRoute,angularMessages
            //以下为自定义
            ,todoCtrl
            ,phoneCtrl
            ,audioCtrl
            ,exprCtrl
            ,helloDir
            ,nprLinkDir
            ,todoFocusDir
            ,todoEscapeDir
            ,ensureUniqueDir
            ,todoStorageSrv
            ,phoneStorageSrv
            ,myInterpolateSrv
            ,capitalizeFilter
    ) {
	// Declare app level module which depends on views, and components
        return angular.module('myApp', [
            'ngRoute'
            ,'ngMessages'
            //以下为自定义
            ,helloDir,nprLinkDir,ensureUniqueDir,capitalizeFilter,phoneStorageSrv,myInterpolateSrv
            ])
            .controller('PhoneListController', phoneCtrl)//控制器名称定义：####Controller
            .controller('ExprController',exprCtrl)
            .controller('PlayerController',audioCtrl)
            .config(['$routeProvider','$locationProvider',
                function($routeProvider,$locationProvider){
                    //针对Html5的history模式，设置html5Mode(true)即可
                    //如果当是以hash方式更新location的话，需要设置下hashPrefix，默认为空
                    $locationProvider.html5Mode({
                        enabled: true,
                        requireBase: false //用这个可以避免在Html中写<base href="app"> 这一句
                        //<base href="app"> 打开Html5模式的时候需要使用 或者 在 $locationProvider.html5Mode 中设置requireBase: false-->
                    }).hashPrefix('!');

                    //$routeProvider.otherwise({redirectTo: '/view1'});
                }
            ]);
    }
);

