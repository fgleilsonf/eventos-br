'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .directive('mediaElement', mediaElement);

function mediaElement() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.mediaelementplayer();
        }
    }
}
