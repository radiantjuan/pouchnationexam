(function(){
    "use strict";

    var app = angular.module('clothesbuffermanila', [
        'ngRoute',
        'ngSanitize',
        'uiGmapgoogle-maps',
        'ezfb'
    ]);

    app.config(config);

    config.$inject = [
        '$routeProvider',
        '$locationProvider',
        'uiGmapGoogleMapApiProvider',
        'ezfbProvider'
    ];

    function config(
        $routeProvider,
        $locationProvider,
        uiGmapGoogleMapApiProvider,
        ezfbProvider
    ){
        ezfbProvider.setInitParams({
            // This is my FB app id for plunker demo app
            appId: '418097365216866',

            // Module default is `v2.6`.
            // If you want to use Facebook platform `v2.3`, you'll have to add the following parameter.
            // https://developers.facebook.com/docs/javascript/reference/FB.init
            version: 'v2.9'
        }); 

        uiGmapGoogleMapApiProvider.configure({
           key: 'AIzaSyA0uVmRvzPOMeoDihCcuJIDK8FOQ3O6VWM', 
            v: '3.20', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization',
            philippines:true
        });

        $locationProvider.html5Mode(true).hashPrefix('!');

        $routeProvider
            .when('/', {
                templateUrl: 'templates/default.html',
                controller: 'DefaultController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    app.run(function (ezfb) {
        ezfb.init({
        // This is my FB app id for plunker demo app
            appId: '418097365216866',
            secret:'f954a371ee23712237ea07083fb7bb07',
            version: 'v2.9'
        });  
    });

    console.log('ApspInitialized!');

})();