/**
 * Created by jjq on 15-8-12.
 * 路由系统并不是一个系统所必须的，SPA实现中特别需要
 */
define([
//    'angularUiRouter'
],function(){
    return ['$stateProvider','$urlRouterProvider'
        ,function($stateProvider,$urlRouterProvider) {
            //如果没有路由引擎能匹配当前的导航状态，那它就会默认将路径路由至 /start,
            // 这个页面就是状态名称被声明的地方. 只要理解了这个，那它就像switch case语句中的default选项.
            $urlRouterProvider
                //.when('/inputbox','/inputbox/detail')
                .otherwise("/start");
            //$urlRouterProvider
            //    // 错误的路由重定向
            //    .when('/c?id', '/contacts/:id')
            //    .when('/user/:id', '/contacts/:id')
            //    .otherwise('/');

            $stateProvider
                .state('start', {
                    url: "/start",
                    templateUrl: 'views/partials/start.html'
                })
                .state('inputbox', {
                    //abstract:true,
                    url:"/inputbox"
                    ,templateUrl:'views/partials/inputbox.html'
                    ,controller:['$scope','$state',function($scope,$state/*,currentDetails, facebookId*/) {
                        //这里比较重要，当激活inputbox状态时并不会将inputbox.detail的内容显示出来，所以用下面的代码重定向
                        $state.transitionTo('inputbox.detail');
                        //$state.go('inputbox.detail');
                    }]
                })
                .state('inputbox.detail', {
                    url:"/detail"
                    ,views: {
                        'filters': {
                            template: '<h4>Filter inbox</h4>',
                            controller: function($scope) {}
                        },
                        'mailbox': {
                            templateUrl: 'views/inputbox/mailbox.html'

                        },
                        'priority@inputbox': {
                            template: '<h4>Priority inbox</h4>'
                            //resolve: {
                            //    facebook: function() {
                            //        return FB.messages();
                            //    }
                            //}
                        }
                    }
                })
                .state('report', {
                    url: '/report',
                    templateUrl: 'views/partials/report.html'
                })
                .state('report.current', {
                    url: '/current',
                    templateUrl: 'views/report/current.html'
                })
                .state('report.last', {
                    url: '/last',
                    templateUrl: 'views/report/last.html'
                })
                .state('report.resolvetest', {
                    url: '/resolvetest',
                    templateUrl: 'views/report/resolvetest.html',
                    //resolve中的内容可以被注入到controller中
                    resolve: {
                        // 当结果不是promise时立即返回
                        person: function() {
                            return {
                                name: "Ari",
                                email: "ari@fullstack.io"
                            }
                        }
                        // 这个函数返回一个promise,它会在控制器实例化之前解析
                        //,currentDetails: function($http) {
                        //    return $http({
                        //        method: 'JSONP',
                        //        url: '/current_details'
                        //    });
                        //}
                        // 还可以在另一个解析中使用上面返回的promise
                        //,facebookId: function($http, currentDetails) {
                        //    $http({
                        //        method: 'GET',
                        //        url: 'http://facebook.com/api/current_user',
                        //        params: {
                        //            email: currentDetails.data.emails[0]
                        //        }
                        //    });
                        //}
                    }
                    ,controller: ['$scope','person',function($scope,person/*,currentDetails, facebookId*/) {
                        $scope.person = person;
                    }]
                });
        }
    ];
});