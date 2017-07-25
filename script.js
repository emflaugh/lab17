$(document).ready(function($scope){

  $('#like-toggle').click(function likeToggle($scope) {
    $(this).toggleClass('glyphicon-heart-empty').toggleClass('glyphicon-heart');
});
//closure for document.ready
});
