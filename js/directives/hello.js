/**
 * Created by jiangjianqing on 2015/7/27.
 * 展示了如何使用directive的 E 类型扩展
 */

define([
    'angular'
],function(angular){
    var moduleName="SimpleHelloDirective";
    angular
        .module(moduleName,[])
        .directive('simpleHello', function() {
            return {
                restrict: "E",
                replace: true,
                template: "<div>Hello readers, thank you for coming</div>"
            }
        });
    return moduleName;
});