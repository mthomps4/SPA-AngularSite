app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
});

app.controller('ContactController', function($scope, $window) {
  $scope.message = 'Hello from ContactController';
  $scope.angularAlert = function() {
    $window.alert('If only I had made a form...');
  };
});

app.controller('AboutController', function($scope) {
  $scope.message = 'Hello from AboutController';
});
