/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 17.11.12
 * Time: 15:22
 */
'use strict';

define(['angular', 'utils/route-config'], function (angular, routeConfig, lazyDirectives) {


    var app = angular.module('myApp', [], function ($compileProvider, $controllerProvider) {
        routeConfig.setCompileProvider($compileProvider);
        routeConfig.setControllerProvider($controllerProvider);
    });

    app.controller('indexController',function($scope){
        $scope.focusclass="active";
    })

    return app;
});
