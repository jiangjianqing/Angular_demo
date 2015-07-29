/**
 * Created by jiangjianqing on 2015/7/27.
 */
define([
    'angular'
],function(angular){
    var moduleName="NprLinkDirective";
    angular
        .module(moduleName,[])
        .directive('nprLink',function(){
            return{
                restrict: 'EA',
                require: ['^ngModel'],
                replace: true,
                scope: {
                    ngModel: '=',// 将ngModel同指定对象绑定
                    play: '&'    // 将引用传递给这个方法
                    //,fromName: '@' // 储存与fromName相关联的字符串
                },
                templateUrl: 'views/nprListItem.html',

                /*
                *如果没有设置require选项，那么controller参数的值为undefined。
                *定义了require，才会有第四个controller参数，代表控制器或所依赖指令的控制器
                * 如果require选项提供了一个指令数组，第四个参数会是一个由每个指令所对应的控制器组成的数组。
                * */
                link: function(scope, ele,attrs,ctrl) {
                    scope.duration = scope.ngModel.audio[0].duration.$text;
                }
            };
        });
    return moduleName;
});