'use strict';

angular.module('myApp.view.social.default', ['ngRoute', 'myApp.filter', 'myApp.services', 'myApp.view.filter', 'myApp.view.councillors'])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'views/default/template.html',
            controller: 'SocialDefaultController',
            reloadOnSearch: false
        })

    }])



    .controller('SocialDefaultController', ['$scope', 'QueriesService', '$location', '$interval', function ($scope, QueriesService, $location, $interval) {

        $scope.title = "Réseaux sociaux";

    }]);

