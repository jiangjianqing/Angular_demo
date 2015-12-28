/**
 * Created by ztxs on 15-12-28.
 */
'use strict';

define([
        'angular'
        //以下为自定义
        ,'scripts/controllers/translate'
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
        ,'scripts/services/translate'
        ,'scripts/filters/capitalize'
    ], function(angular
                //以下为自定义
        ,translateCtrl
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
        ,translateSrv
        ,capitalizeFilter
    ) {
        var moduleName="app.controllers";
        angular.module(moduleName, [

            //以下为自定义
            helloDir,nprLinkDir,ensureUniqueDir,capitalizeFilter,phoneStorageSrv,myInterpolateSrv,translateSrv
        ])
            .controller('TranslateController',translateCtrl)//翻译控制器
            .controller('PhoneListController', phoneCtrl)//控制器名称定义：####Controller
            .controller('ExprController',exprCtrl)
            .controller('PlayerController',audioCtrl)
            ;

        return moduleName;
    }
);

