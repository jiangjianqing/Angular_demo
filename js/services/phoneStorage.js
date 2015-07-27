/**
 * Created by jiangjianqing on 2015/7/27.
 */
define([
    'angular'
],function(angular){
    var moduleName="PhoneStorageService";
    angular
        .module(moduleName,[])
        .factory('phoneStorage',function(){
            var phones=[
                {   "name": "Nexus S",
                    "snippet": "Fast just got faster with Nexus S.",
                    "age":1
                },
                {   "name": "Motorola XOOM? with Wi-Fi",
                    "snippet": "The Next, Next Generation tablet.",
                    "age":2
                },
                {   "name": "MOTOROLA XOOM?",
                    "snippet": "The Next, Next Generation tablet.",
                    "age":3
                }
            ];
            return phones;
        });
    return moduleName;
});