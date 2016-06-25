
var app = angular.module('app');

app.directive('insertNav', function() {
  return {
    templateUrl: '../templates/_nav.html'
  };
});

app.directive('insertFooter', function(){
  return {
    templateUrl: '../templates/_footer.html'
  };
});
