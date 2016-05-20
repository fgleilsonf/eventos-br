'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .directive('youtube', Youtube);

function Youtube($sce, youtubeService) {
  return {
    restrict: 'EA',
    templateUrl: '/templates/youtube.html',
    scope: {
      code: '=',
      path: '=',
      height: '='
    },
    link: function (scope) {
      scope.height = scope.height || '100%';

      if (scope.path) {
          var videoId = youtubeService.extractCodeFromUrl(scope.path);
          scope.code = videoId[1];
      }

      scope.$watch('code', function (newVal) {
        if (newVal) {
          var src = 'https://www.youtube.com/embed/' + newVal;
          scope.url = $sce.trustAsResourceUrl(src);
        }
      });
    }
  };
}
