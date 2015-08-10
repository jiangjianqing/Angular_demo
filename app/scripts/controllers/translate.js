/**
 * Created by jiangjianqing on 2015/8/10.
 */
define([
    'angular'
],function(angular){
    return ['$scope','$translate','T','$log','$q',
        function($scope,$translate,T,$log,$q){
            $scope.cur_lang = $translate.use();
            $scope.changeLanguage=function(langKey){
                $translate.use(langKey).then(function(){
                    //注意：在使用$translateProvider.useSanitizeValueStrategy('sanitize')时， 如下方法获取中文信息会变成unicode编码
                    //@@@@@@@@@@@原因还未知，需要后期关注！！！！！
                    //方法1：直接或间接调用$translate.instant
                    //$log.info("测试T.T服务："+T.T('HINT_TEXT'));//这个T服务使用了$translate.instant
                    //方法2：使用promise方式
                    $translate('HINT_TEXT').then(function (HINT_TEXT) {
                        var str = eval("'" + HINT_TEXT + "'"); // "我是unicode编码"
                        $log.info("测试translate服务："+str);
                    });
                    $log.warn("注意中文编码问题与 $translateProvider.useSanitizeValueStrategy 这个设置有关");
                });
                $scope.cur_lang=langKey;
                window.localStorage.langKey = langKey;

            };

            var promiseTest=function(){
                var deferred = $q.defer();
                var tasks = function(){

                    $log.info("promiseTest执行完毕！");

                    deferred.resolve("$q服务测试"); // 改变Deferred对象的执行状态
                    //deferred.reject();
                    //deferred.notify(percentComplete);
                };
                setTimeout(tasks,5000);
                return deferred.promise;
            };
            //then(successFn, errFn, notifyFn) //then函数格式

            //catch(errFn)  //这个方法就只是个帮助函数，能让我们用.catch(function(reason){})取代err回调
            /*.catch(function(reason) {
                deferred.reject(reason);
            });*/

            //finally(callback) //finally方法允许我们观察promise的履行或者拒绝，而无需修改结果的值。当我们需要释放一个资源，或者是运行一些清理工作，不管promise是成功还是失败时，这个方法会很有用
            //promise['finally'](function() {...});  //由于finally是js的保留字，只能这么调用

            //all(promises)  //all()方法返回单个promise，会执行一个数组或者一个散列的值。每个值会响应promise散列
            //中的相同序号或者键。如果任意一个promise被拒绝了，结果的promise也会被拒绝

            //promise调用方式1,与上面的$translate.use使用方式保持一致，可按 F3 看其源码实现
            promiseTest().then(function(data){
                $log.info("promiseTest().then 调用完毕,data="+data);
            });
            //promise调用方式2
            $q.when(promiseTest()).then(function(data){
                $log.info("$q.when 调用完毕,data="+data);
            });
            $log.info("controllers/translate 执行$q测试");
        }
    ];
});