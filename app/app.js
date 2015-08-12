'use strict';

define(['angular'
        ,'angularUiRouter'
        ,'angularTranslate'
        ,'angularSanitize'
        ,'angularTranslateLoaderStaticFiles'
        ,'angularMessages'

        //定义路由
        ,'app-router'
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
], function(angular, angularUiRouter,angularTranslate,angularSanitize
        ,angularTranslateLoaderStaticFiles
        ,angularMessages
        ,appRouter//自定义路由

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
	// Declare app level module which depends on views, and components
        var appName='myApp';
        var appModule=angular.module(appName, [
            'ui.router'
            ,'ngMessages'
            ,'ngSanitize'
            ,'pascalprecht.translate'

            //以下为自定义
            ,helloDir,nprLinkDir,ensureUniqueDir,capitalizeFilter,phoneStorageSrv,myInterpolateSrv,translateSrv
            ]);
        appModule.controller('TranslateController',translateCtrl)//翻译控制器
            .controller('PhoneListController', phoneCtrl)//控制器名称定义：####Controller
            .controller('ExprController',exprCtrl)
            .controller('PlayerController',audioCtrl)
            //设置i18n参数
            .config(['$translateProvider',function($translateProvider){
                //注意：使用angular-translate必须加载angular-sanitize
                //详细见其官方手册关于安全注入html的说明,http://angular-translate.github.io/docs/#/guide/19_security
                //$translateProvider.useSanitizeValueStrategy('escapeParameters');//只在调试中用代码调用$translate.instant获取中文编码时使用,官方说3.0及以后版本将 deprecated
                $translateProvider.useSanitizeValueStrategy('sanitize');//正式环境下建议使用，注意$transate.instant 的中文编码问题
                //获取上次使用的语言，使用localStorage存储
                var langKey = window.localStorage.langKey||'en';
                //方式1 直接定义 翻译(deprecated，只能用于功能测试)
                /*  $translateProvider.translations('en', {
                    HEADLINE: 'Hello there, This is my awesome app!',
                    INTRO_TEXT: 'And it has i18n support!',
                    BUTTON_TEXT_EN:'english',
                    BUTTON_TEXT_DE:'german'
                }).translations('de', {
                        HEADLINE: 'Hey, das ist meine großartige App!',
                        INTRO_TEXT: 'Und sie unterstzt mehrere Sprachen!',
                        BUTTON_TEXT_EN:'english',
                        BUTTON_TEXT_DE:'deutsch'
                    });
                */
                //方式2：使用json文件定义语言资源，静态加载
                $translateProvider.useStaticFilesLoader({
                    prefix: 'i18n/', /* 使用 './i18n/' 是一样的   */
                    suffix: '.json'
                });
                //将语言与json文件名做映射，这一步建议屏蔽！！！测试用用即可，用语言代码可以做到通用化
                $translateProvider.registerAvailableLanguageKeys(['en','cn','de'],{
                    "en_*":"en",
                    "de_*":"de",
                    "zh_*":"cn"//这里将zh_CN、zh_TW都转为cn
                });
                //set preferred lang
                //$translateProvider.preferredLanguage(langKey);
                //auto determine preferred lang
                $translateProvider.determinePreferredLanguage();//这个方法是获取手机默认语言设置,简体中文为zh_CN
                //when can not determine lang, choose en lang.
                $translateProvider.fallbackLanguage(langKey);

            }])
            //设置定位参数
            .config(['$locationProvider',function($locationProvider){
                //针对Html5的history模式，设置html5Mode(true)即可
                //如果当是以hash方式更新location的话，需要设置下hashPrefix，默认为空
                $locationProvider.html5Mode({
                    enabled: false, //使用html5Mode对路由的设置有影响，千万注意
                    requireBase: false //用这个可以避免在Html中写<base href="app"> 这一句
                    //<base href="app"> 打开Html5模式的时候需要使用 或者 在 $locationProvider.html5Mode 中设置requireBase: false-->
                }).hashPrefix('!');

                    //$routeProvider.otherwise({redirectTo: '/view1'});
            }])
            //设置路由
            .config(appRouter);

        return appName;
    }
);

