////////////////// Angular   ///////////////////////
var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'assets/template/homepage.html',
      controller: 'AppController'
    })
    .when('/new', {//portal button
      templateUrl: 'assets/template/newapp.html',
      controller: 'AppController'
    })
    .when('/info', {
      templateUrl: 'assets/template/infoapp.html',
      controller: 'AppController'
    })
    .when('/edit', {
      templateUrl: 'assets/template/editapp.html',
      controller: 'AppController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

// app.controller('AppController', function($scope){
//   $scope.data = [{
//     title: localStorage.getItem('title'),
//     street: localStorage.getItem('street'),
//     city: localStorage.getItem('city'),
//     date: localStorage.getItem('date'),
//     time: localStorage.getItem('time')
//   }];
//
//   $scope.message = ""
//
// });
