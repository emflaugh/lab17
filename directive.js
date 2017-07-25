var app = angular.module('richReddit');

app.directive('redditFeed', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'feed.html'
  };


// // // heart directive
// app.directive('likeHeart', function() {
//   return {
//     restrict: 'E',
//     replace: true,
//     template: '<span class="glyphicon glyphicon-heart"></span>',
//     link: function (scope, elem, attrs) {
//       elem.bind('click', function() {
//         elem.css('color', 'red');
//         scope.$apply(function() {
//
//         });
//       });
//     }
//   }
// });
//



// closure for redditFeed directive
});
