// app.js

var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
    .when('/home',{
      templateUrl: 'assets/templates/homepage.html',
      controller: 'ApptController'
    })
    .when('/new',{
      templateUrl: 'assets/templates/newapp.html',
      controller: 'ApptController'
    })
    .when('/edit',{
      templateUrl: 'assets/templates/editapp.html',
      controller: 'ApptController'
    })
    .when('/view',{
      templateUrl: 'assets/templates/viewapp.html',
      controller: 'ApptController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

app.controller('ApptController', function($scope){
  $scope.data = [{
    title: localStorage.getItem('title'),
    street: localStorage.getItem('street'),
    city: localStorage.getItem('city'),
    date: localStorage.getItem('date'),
    time: localStorage.getItem('time')
  }];
  
});
