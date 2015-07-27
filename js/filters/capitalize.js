/**
 * Created by jiangjianqing on 2015/7/27.
 */
define([
    'angular'
],function(angular){
    var moduleName="CapitalizeFilter";
    angular
        .module(moduleName,[])
        .filter('capitalize',function(){
            return function(input,param){
                return input.substring(0,1).toUpperCase()+input.substring(1);
            }
        });
    return moduleName;
});