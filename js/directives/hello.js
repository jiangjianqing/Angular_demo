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
                scope:{//指令创建的隔离作用域，所有对象或字段都不能直接赋值，而是需要通过绑定策略从外面获取
                    userName:"@",//绑定策略
                    newAddress:"@",//绑定策略
                    emailAddress:"@email"//指定属性名
                },
                template: "<div>Hello {{userName}}, 你的新地址是：{{newAddress}},电子邮件地址：{{emailAddress}}</div>"
            }
        });
    return moduleName;
});