'use strict'

var myApp = angular.module("myApp", [
    'ui.router',
    'ui.router.state.events'
]);

myApp.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state("example", {
            url: "/example",
            templateUrl: "./geolocation/index.html",
            controller: "exampleController"
        })
}])