'use strict';

angular.module('myApp.view.default', ['ngRoute', 'myApp.filter', 'myApp.services', 'myApp.view.filter', 'myApp.view.councillors'])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'views/default/template.html',
            controller: 'MainController',
            reloadOnSearch: false
        })

    }])



    .controller('MainController', ['$scope', 'QueriesService', '$location', '$interval', function ($scope, QueriesService, $location, $interval) {

        $scope.title = "My Title";

    }]);

