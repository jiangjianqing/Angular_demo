/**
 * Created by jiangjianqing on 2015/7/29.
 */
define([
    'angular'
],function(angular){
    return ['$scope','$log','$parse','$timeout','myInterpolate',
        function($scope,$log,$parse,$timeout,myInterpolate){
            $log.info("注意：在controller中可以直接通过id访问dom元素,用于调试很好用，并且是整个页面范围，而不是局限于当前作用域");
            $log.info("下面访问作用域之外的一个 id='test' 的dom元素");
            $log.info(test);
            $scope.to="";
            $scope.body="";
            $scope.previewText="";
            $scope.$watch("body",function(newVal,oldVal,scope){
                if(newVal){
                    $log.info("body被修改,to="+$scope.to);
                    $log.info(to);//访问本控制器范围内id='to'的元素，预期输出<input id="to" name="to" ng-model="to">
                    $scope.previewText=myInterpolate.parse($scope.body,{to:$scope.to});
                }
            });

            $scope.expr="";
            var exprTimer;
            $scope.$watch("expr",function(newVal,oldVal,scope){
               if(newVal){
                   if (exprTimer) $timeout.cancel(exprTimer);
                   exprTimer=$timeout(function(){
                       // 用该表达式设置parseFun
                       try{
                           var parseFun=$parse(newVal);
                           // 获取经过解析后表达式的值
                           $scope.parsedVal=parseFun(scope);
                       }catch(ex){
                           $scope.parsedVal="[表达式错误]";
                       }


                   },1000);

               }
            });

    }];
});