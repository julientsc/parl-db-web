'use strict';

angular.module('myApp.view.default', ['ngRoute', 'myApp.filter', 'myApp.services'])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'views/default/template.html',
            controller: 'MainController',
            reloadOnSearch: false
        })

    }])

    .controller('MainController', ['$scope', 'QueriesService', '$location', function ($scope, QueriesService, $location) {

        $scope.title = "My Title";

        $scope.councillors = [];
        $scope.setCouncillors = function (data) {
            console.log("setCouncillors");

            $scope.councillors = data;

            $scope.cantons = [];
            $scope.langs = [];
            $scope.parties = [];
            $scope.factions = [];
            $scope.councils = [];

            $scope.filter = {};
            $scope.filter.canton = [];

            for (var councillorId in $scope.councillors) {
                var councillor = $scope.councillors[councillorId];
                $scope.cantons = _.union($scope.cantons, [councillor.canton]);
                $scope.langs = _.union($scope.langs, [councillor.lang]);

                for(var groupId in councillor.group) {
                    var group = councillor.group[groupId];
                    var groupName = group.substring(0, group.indexOf("/"));
                    var groupId = group.substring(group.indexOf("/") + 1);

                    switch (groupName) {
                        case "party":
                            $scope.parties = _.union($scope.parties, [groupId]);
                            break;
                        case "faction":
                            $scope.factions = _.union($scope.factions, [groupId]);
                            break;
                        case "council":
                            $scope.councils = _.union($scope.councils, [groupId]);
                            break;
                    }
                }
            }

        }

        $scope.getFilters = function() {
            console.log("getFilters");
            var r = "";
            for(var filter in $scope.filter) {
                for(var id in $scope.filter[filter]) {
                    if($scope.filter[filter][id].isSelected)
                    r += filter + "=" + id + "&";
                }
            }
            $location.search(r);
            alert(r);
        }

        $scope.setFilters = function() {
            console.log("setFilters");

            $scope.filter = {}

            for(var loc in $location.search()) {
                var r = $location.search()[loc];
                var a = [];
                if(_.isArray(r))
                    a = r;
                else
                    a = [r];

                $scope.filter[loc] = {};
                console.log( $scope.filter);
               // $scope.filter[loc] = "";
                for(var x in a) {
                    $scope.filter[loc][a[x]] = {};
                    $scope.filter[loc][a[x]].isSelected = true;
                }


            }


            /*var r = "";
            for(var filter in $scope.filter) {
                for(var id in $scope.filter[filter]) {
                    if($scope.filter[filter][id].isSelected)
                        r += filter + "=" + id + "&";
                }
            }
            $location.search(r);*/
        }


        QueriesService.getCouncillors($scope.setCouncillors);


    }]);

