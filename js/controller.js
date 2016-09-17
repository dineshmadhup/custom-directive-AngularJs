app.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.person = {
        name: 'Dinesh Madhup',
        address: 'California St',
        city: 'San Francisco',
        state: 'CA',
        zip: '12345'
    }
    
}]);

app.controller('aboutController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);