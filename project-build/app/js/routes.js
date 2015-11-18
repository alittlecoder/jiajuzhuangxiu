/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 14.11.12
 * Time: 20:21
 */

'use strict';

define(['app', 'utils/route-config'], function (app, routeConfig) {

    return app.config(function ($routeProvider) {
        $routeProvider.when('/aboutus', routeConfig.config('../partials/aboutus.html', 'controllers/aboutus'));
        $routeProvider.when('/services', routeConfig.config('../partials/services.html', 'controllers/services'));
        $routeProvider.when('/catalogue', routeConfig.config('../partials/catalogue.html', 'controllers/catalogue'));
        $routeProvider.when('/pricing', routeConfig.config('../partials/pricing.html', 'controllers/pricing'));
        $routeProvider.when('/contacts', routeConfig.config('../partials/contacts.html', 'controllers/contacts'));

        //¶þ¼¶Ò³Ãæ
        $routeProvider.when('/projecthappytime', routeConfig.config('../partials/projectlist/happtime83.html', 'controllers/happytime'));

        $routeProvider.otherwise({redirectTo:'/aboutus'});
    });

    return app;
});
