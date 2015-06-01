'use strict';

angular.module('myApp.view.filter', ['ngRoute', 'myApp.services'])
/*
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'views/default/template.html',
            controller: 'MainController',
            reloadOnSearch: false
        })

    }])
*/
    .controller('FilterController', ['$scope', 'QueriesService', '$location', '$interval', function ($scope, QueriesService, $location, $interval) {

        $scope.title = "My Title";

        $scope.cantons = {};
        $scope.councils = {};
        $scope.factions = {};
        $scope.languages = {};
        $scope.parties = {};


        $scope.updateCantons = function (data) {
            console.log("updateCantons");
            $scope.cantons = data;
        };

        $scope.updateCouncils = function (data) {
            console.log("updateCouncils");
            $scope.councils = data;
        };

        $scope.updateFactions = function (data) {
            console.log("updateFactions");
            $scope.factions = data;
        };

        $scope.updateLanguages = function (data) {
            console.log("updateLanguages");
            $scope.languages = data;
        };

        $scope.updateParties = function (data) {
            console.log("updateParties");
            $scope.parties = data;
        };



        $scope.filter = {};
        $scope.filter.cantons = {};
        $scope.filter.councils = {};
        $scope.filter.factions = {};
        $scope.filter.languages = {};
        $scope.filter.parties = {};

        $scope.updateLink = function() {
            console.log("updateLink");
            var r = "";


            for(var filterId in $scope.filter) {
                var filter = $scope.filter[filterId];
                for(var id in filter) {
                    if(filter[id].isSelected)
                    r += filterId + "=" + id + "&";
                }
            }
            $location.search(r);

            $scope.action();
        }

        $scope.init = function() {
            console.log("== init");

            $scope.filter = {}

            for(var loc in $location.search()) {
                var r = $location.search()[loc];
                var a = [];
                if(_.isArray(r))
                    a = r;
                else
                    a = [r];

                $scope.filter[loc] = {};
                for(var x in a) {
                    $scope.filter[loc][a[x]] = {};
                    $scope.filter[loc][a[x]].isSelected = true;
                }
            }


            $interval($scope.test, 0, 1);
        }

        $scope.test = function() {
            QueriesService.getCantons($scope.updateCantons);
            QueriesService.getCouncils($scope.updateCouncils);
            QueriesService.getFactions($scope.updateFactions);
            QueriesService.getLanguages($scope.updateLanguages);
            QueriesService.getParties($scope.updateParties);

            $scope.action();
        }



    }])

    .directive('filterTools', function() {
        return {
            restrict: 'E',
            scope: {
                filter: '=selection',
                action: '=action'
            },
            templateUrl: 'views/filter/template.html',
            controller: 'FilterController'
        };
    });

