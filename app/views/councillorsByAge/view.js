'use strict';

angular.module('myApp.view.councillorsByAge', ['ngRoute', 'myApp.filter', 'myApp.services', 'myApp.view.filter', 'myApp.view.councillors'])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/age', {
            templateUrl: 'views/councillorsByAge/template.html',
            controller: 'MainController',
            reloadOnSearch: false
        })

    }])



    .controller('MainController', ['$scope', 'QueriesService', '$location', '$interval', function ($scope, QueriesService, $location, $interval) {

        $scope.title = "My Title";

        $scope.data = {

        }

        $scope.drawGraph = function() {


            var data = {
                chart: {
                    type: 'column',
                    renderTo: 'container'
                },
                title: {
                    text: 'Stacked column chart'
                },
                xAxis: {
                    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Total fruit consumption'
                    },
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    }
                },
                legend: {
                    align: 'right',
                    x: -30,
                    verticalAlign: 'top',
                    y: 25,
                    floating: true,
                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                    borderColor: '#CCC',
                    borderWidth: 1,
                    shadow: false
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.x + '</b><br/>' +
                            this.series.name + ': ' + this.y + '<br/>' +
                            'Total: ' + this.point.stackTotal;
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: true,
                            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                            style: {
                                textShadow: '0 0 3px black'
                            }
                        }
                    }
                },
                series: [{
                    name: 'John',
                    data: [5, 3, 4, 7, 2]
                }, {
                    name: 'Jane',
                    data: [2, 2, 3, 2, 1]
                }, {
                    name: 'Joe',
                    data: [3, 4, 4, 2, 5]
                }]
            }

            if($scope.chart != null)
                $scope.chart.destroy();

            $scope.chart = new Highcharts.Chart(data);
        }

        $scope.drawGraph();
    }]);

