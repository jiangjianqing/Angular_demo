/**
 * Created by jiangjianqing on 2015/8/10.
 */
define([
    'angular'
],function(angular){
    var moduleName="TranslateService";
    angular
        .module(moduleName, [])
        .factory('T', ['$translate',function ($translate) {

            return {
                T:function(key){
                    if (key){
                        return $translate.instant(key);
                    }
                    return key;
                }
            };
        }]);
    return moduleName;
});