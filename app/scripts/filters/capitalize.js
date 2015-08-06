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
                //return input[0].toUpperCase()+input[1].slice();//书上的写法，这种写法存在问题

                //第二种写法，故意没有在input.substring(1)后面加.toLowerCase，通过组合过滤 lowercase | capitalize 来达到预期效果
                return input.substring(0,1).toUpperCase()+input.substring(1);
            }
        });
    return moduleName;
});