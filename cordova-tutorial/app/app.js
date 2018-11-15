const App = angular.module('cordovaApp', []);

App.controller('mainController', function($scope){
  $scope.message = 'Excited to build hybrid app';

  $scope.captureImage = function() {
    $scope.message = "Button clicked";
  };
});

