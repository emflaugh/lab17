var app = angular.module('richReddit');

app.controller('outputCtrl', function($scope, redditFactory) {

  $scope.posts = redditFactory.getJSON();

  $scope.toggleClass = function(event) {
    $(event.target).toggleClass('glyphicon-heart-empty').toggleClass('glyphicon-heart');
  }

});
