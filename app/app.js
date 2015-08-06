'use strict';

define([
	'angular'
	,'angularRoute'
    ,'angularMessages'

    ,'controllers/todo'
    ,'controllers/phone'
    ,'controllers/audio'
    ,'controllers/expr'
    ,'directives/hello'
    ,'directives/nprLink'
    ,'directives/todoFocus'
    ,'directives/todoEscape'
    ,'directives/ensureUnique'
    ,'services/todoStorage'
    ,'services/phoneStorage'
    ,'services/myInterpolate'
    ,'filters/capitalize'
], function(angular, angularRoute,angularMessages
            //����Ϊ�Զ���
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
            //����Ϊ�Զ���
            ,helloDir,nprLinkDir,ensureUniqueDir,capitalizeFilter,phoneStorageSrv,myInterpolateSrv
            ])
            .controller('PhoneListController', phoneCtrl)//���������ƶ��壺####Controller
            .controller('ExprController',exprCtrl)
            .controller('PlayerController',audioCtrl)
            .config(['$routeProvider','$locationProvider',
                function($routeProvider,$locationProvider){
                    //���Html5��historyģʽ������html5Mode(true)����
                    //���������hash��ʽ����location�Ļ�����Ҫ������hashPrefix��Ĭ��Ϊ��
                    $locationProvider.html5Mode({
                        enabled: true,
                        requireBase: false //��������Ա�����Html��д<base href="app"> ��һ��
                        //<base href="app"> ��Html5ģʽ��ʱ����Ҫʹ�� ���� �� $locationProvider.html5Mode ������requireBase: false-->
                    }).hashPrefix('!');

                    //$routeProvider.otherwise({redirectTo: '/view1'});
                }
            ]);
    }
);

