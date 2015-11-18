/**
 * Created by zx on 2015/11/12.
 */
'use strict';

define([], function () {

    function aboutusController($scope,$resource) {
        $scope.message = "I'm the zx controller!";

         //var User=$resource('/json/:userId',{userId:'@id'});

        //var User = $resource('/api/users/:userId', {userId:'@id'});


        //$scope.myclick = function(){
        //    //User.get({id:'menu.json'},function(resp){
        //    // var aaa =  User.get({},function(resp){
        //    User.get({id:'123'},function(resp){
        //        //alert(resp);
        //      console.log(resp);
        //        //success
        //    },function(error){
        //        alert(error);
        //        //fail
        //    });
        //
        //    console.log(aaa);
        //}

        $scope.myclick = function(){
            //$scope.phones = Phone.query();
            //$scope.phones = Phone.get({phoneId: 'sanyo-zio'});

            var User=$resource('json/:file.json',{},{});
            User.get({file: 'menu'},function(p){
                    console.log(p);
                })


            //var myqu = $resource('phones/:phoneId.json', {}, {});
            //myqu.get({phoneId: 'sanyo-zio'},function(p){
            //    console.log(p);
            //})
        }
    }

    return aboutusController;
});