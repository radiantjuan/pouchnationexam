(function(){
	"use strict";

    var app = angular.module('clothesbuffermanila');

    app.controller('DefaultController', [
        '$scope',
        '$http',
        '$sce',
        'ezfb',
        function($scope,$http,$sce,ezfb){

            $scope.fbshare = function(){
                ezfb.ui({
                    method: 'share',
                    display: 'popup',
                    href: 'http://clothesbuffetmanila.com/',
                  }, function(response){});
            };

            $http({
                method: 'GET',
                url: 'https://api.myjson.com/bins/mggst'
            })
            .then(function successCallback(response) {
                var result = response.data.event;
                    console.log(result);

                    var details = result.details;
                    $scope.bannerimg = result.banner;
                    $scope.details = details;
                    $scope.fblink = result.fb;
                    $scope.organizer = result.organizer;
                    $scope.posterimg = result.poster; /*WRONG IMAGE*/
                    $scope.twitter = result.twitter;
                    $scope.website = result.website;
                    $scope.tickets = result.ticket_types;

                    $scope.short_desc = function() {
                        return $sce.trustAsHtml(details.short_description);
                    };

                    $scope.long_desc = function() {
                        return $sce.trustAsHtml(details.long_description);
                    };

                    console.log($scope.short_desc());

                }, function errorCallback(response) {
                    console.log(response);
                });
            
        }
    ]);
    
    console.log('Default Controller Initialized!');

})();