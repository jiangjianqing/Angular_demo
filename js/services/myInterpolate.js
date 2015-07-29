/**
 * Created by jiangjianqing on 2015/7/29.
 * 使用方式：1、注入MyInterpolate,2、调用MyInterpolate.parse(text,content)
 * text格式如：你好,{{username}}!
 * content格式：{username:'jjq'}
 * parse返回结果：你好,jjq!
 */
define([
    'angular'
],function(angular){
    var moduleName='MyInterpolateService';
    angular
        .module(moduleName,[])
        .factory('myInterpolate',['$interpolate','$log',function($interpolate,$log){
            return {
                parse:function(text,content){
                    $log.info("myInterpolate服务开始解析");
                    $log.info("text="+text);
                    var template=$interpolate(text);
                    return template(content);
                }
            };
        }]);
    return moduleName;
});