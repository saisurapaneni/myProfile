(function () {
    "use strict";
    var app = angular
        .module("myApp", ['ngRoute']);
    app.config(['$routeProvider', function($routeProvider){
        $routeProvider.
       when('/home', {
            templateUrl: 'com/container/home.view.html'
        }).
        when('/about', {
            templateUrl: 'com/container/about.view.html',
            controller: 'AboutController'
        }).
        when('/experience', {
            templateUrl: 'com/container/experience.view.html'
        }).
        when('/qualification', {
            templateUrl: 'com/container/qualification.view.html'
        }).
        when('/contact', {
            templateUrl: 'com/container/contact.view.html'
        }).
        otherwise({
            redirectTo: '/about'
        });
      }]);
    app.controller("AboutController", function($scope){

    });
    app.controller("SkillsetController", function($scope){

    });
    app.controller("SidebarController", function($scope){

    });

}());
