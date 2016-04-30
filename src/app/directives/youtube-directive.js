'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .directive('youtube', Youtube);

function Youtube($sce) {
  return {
    restrict: 'EA',
    templateUrl: '/templates/youtube.html',
    scope: {
      code: '=',
      height: '='
    },
    link: function (scope) {
      scope.height = scope.height || '100%';
      scope.$watch('code', function (newVal) {
        if (newVal) {
          var src = 'https://www.youtube.com/embed/' + newVal;
          scope.url = $sce.trustAsResourceUrl(src);
        }
      });
    }
  };
}
