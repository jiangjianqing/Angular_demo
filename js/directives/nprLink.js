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
                    ngModel: '=',
                    play: '&'
                },
                templateUrl: 'js/views/nprListItem.html',
                link: function(scope, ele, attr) {
                    scope.duration = scope.ngModel.audio[0].duration.$text;
                }
            };
        });
    return moduleName;
});