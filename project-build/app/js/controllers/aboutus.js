/**
 * Created by zx on 2015/11/12.
 */
'use strict';

define([], function () {

    function aboutusController($scope,$resource) {
        $scope.message = "I'm the zx controller!";

         //var User=$resource('/json/:userId.json',{userId:'@id'});
        var User=$resource('json/menu.json');

        $scope.myclick = function(){
            //User.get({id:'menu'},function(resp){
          var aaa =  User.get({},function(resp){
                //alert(resp);
              console.log(resp);
                //success
            },function(error){
                alert(error);
                //fail
            });

            console.log(aaa);
        }

    }

    return aboutusController;
});