var app = angular.module('MessageApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'MessageController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});