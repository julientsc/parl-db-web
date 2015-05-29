'use strict';

angular.module('myApp.templates', [])

    .directive('parlItem', function() {
        return {
            restrict: 'E',
            scope: {
                parl: '='
            },
            templateUrl: 'templates/parl.html'
        };
    });

