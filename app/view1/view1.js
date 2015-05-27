'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.services'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', 'QueriesService', function ($scope, QueriesService) {

        $scope.title = "My Title";


        /*$scope.cantons = QueriesService.getCantons();
         $scope.councils = QueriesService.getCouncils();
         $scope.factions = QueriesService.getFactions();
         $scope.languages = QueriesService.getLanguages();
         $scope.parties = QueriesService.getParties();*/

        $scope.updateCantons = function(data) {
            $scope.cantons = data;
        }

        $scope.updateCouncils = function(data) {
            $scope.cantons = data;
        }

        $scope.updateFactions = function(data) {
            $scope.cantons = data;
        }

        $scope.updateFactions = function(data) {
            $scope.cantons = data;
        }

        $scope.display = function () {

            $scope.cantons = [];
            QueriesService.getCantons($scope.updateCantons);


            // alert($scope.cantons);
        }

    }]);