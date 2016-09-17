//Routes
app.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
    })
    
    .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'contactController'
    })
    
});