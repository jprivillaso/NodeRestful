var app = angular.module("MyApp", ["ngRoute"]);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'LoginController', 
      templateUrl: '/templates/login.html' 
    })
    .when('/home', { 
      controller: 'MainController', 
      templateUrl: '/templates/home.html' 
    })
    .otherwise({ 
      redirectTo: '/'
    }); 
});