/**
 * Created by jiangjianqing on 2015/7/29.
 */
define([
    'angular'
],function(angular){
    var moduleName="EnsureUniqueDirective";
    angular
        .module(moduleName,[])
        .directive("ensureUnique",["$http","$log",function($http,$log){
            return{
                restrict:"A",
                require:"ngModel",
                link:function(scope,ele,attrs,ctrl){
                    $log.info("ensureUnique指令激活,ensureUnique的值="+attrs.ensureUnique);
                    $log.info("scope.ngModel的值为如下：");
                    $log.info(scope.ngModel);
                    $log.info("link函数的参数值为如下：");
                    $log.info({
                        "scope":scope,
                        "ele":ele,
                        "attrs":attrs,
                        "ctrl":ctrl
                    });
                    scope.$watch(attrs.ngModel,function(newVal,oldVal/*, scope 忽略*/){
                        if(!newVal) return;
                        ctrl.$setValidity("unique",newVal==="my");
                        /*向/api/check/username的地址发送一个POST请求来验证用户名是否可用
                        $http({
                            method: 'POST',
                            url: '/api/check/' + attrs.ensureUnique,
                            data: {
                                field: attrs.ensureUnique,
                                value: scope.ngModel
                            }
                        }).success(function(data) {
                            ctrl.$setValidity('unique', data.isUnique);
                        }).error(function(data) {
                            ctrl.$setValidity('unique', false);
                        });
                        */
                    });
                }
            }
    }]);
    return moduleName;
});