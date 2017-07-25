var app = angular.module('richReddit');

app.controller('inputCtrl', function($scope, $location, redditFactory) {

$scope.searchSubReddit = function(subReddit) {
  redditFactory.setJSON(subReddit);
  // $location.path('/output');
}

//closure for redditCtrl
});
