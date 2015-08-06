/**
 * Created by jiangjianqing on 2015/7/27.
 */
define([
    'angular'
],function(angular){
    return ['$scope','$http',function($scope,$http){
        $scope.audio=document.createElement('audio');
        $scope.audio.src="http://cdn.y.baidu.com/yinyueren/3b99fe34adea4412b944ab64dad6a189.mp3";
        $scope.playing=false;
        $scope.play=function(program){
            if(program!==undefined){
                if($scope.playing)
                    $scope.audio.pause();
                if(program.audio[0].format.mp4!==undefined){
                    var url = program.audio[0].format.mp4.$text;
                    console.log(url);
                    $scope.audio.src=url;
                }else{
                    console.log("没有找到当前的音乐信息");
                    return;
                }
            }
            $scope.audio.play();
            $scope.playing=true;
        };
        $scope.stop=function(){
            $scope.audio.pause();
            $scope.playing=false;
        };
        $scope.audio.addEventListener('ended', function() {
            $scope.$apply(function() {
                $scope.stop()
            });
        });

        var apiKey="MDE5OTg3NjU5MDE0Mzc5ODQ1MzUzMDI0YQ001";
        var nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';
        $http({
            method: 'JSONP',
            url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
        }).success(function(data, status) {
            $scope.programs=data.list.story;
            // Now we have a list of the stories (data.list.story)
            // in the data object that the NPR API
            // returns in JSON that looks like:
            // data: { "list": {
            //   "title": ...
            //   "story": [
            //     { "id": ...
            //       "title": ...
        }).error(function(data, status) {
            // Some error occurred
        });
    }];
});