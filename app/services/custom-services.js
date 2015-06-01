angular.module('myApp.services', [])

    .service('QueriesService', function ($http) {
        this.url = "http://localhost:8080/rest";

        this.getCantons = function (d) {
            this.callGetHTTP(d, this.url + '/parl/canton');
        }

        this.getCouncils = function (d) {
            this.callGetHTTP(d, this.url + '/parl/council');
        }
        this.getFactions = function (d) {
            this.callGetHTTP(d, this.url + '/parl/faction');
        }

        this.getLanguages = function (d) {
            this.callGetHTTP(d, this.url + '/parl/language');
        }

        this.getParties = function (d) {
            this.callGetHTTP(d, this.url + '/parl/party');
        }

        this.getCouncillors = function (d) {
            this.callGetHTTP(d, this.url + '/parl/councillor');
        }


        this.callGetHTTP = function (callback, url) {
            $http.get(url).
                success(function (data, status, headers, config) {
                    console.log("Sucess : " + url);
                    callback(data);
                    // console.log(data);
                }).
                error(function (data, status, headers, config) {
                    console.error("Error : " + url);
                    d(null);
                });
        }


    })
    .service('FilterUpdateService', function () {

        var callback = null;
        this.register = function (callback2) {
            console.log("register" + callback2);
            this.callback = callback2;
        }
        this.update = function (filter) {
            console.log(callback);
            if (callback != null) {
                callback(filter);
            }
        }


    });