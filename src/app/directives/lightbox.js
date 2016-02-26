'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .directive('lightbox', lightbox);

function lightbox() {
    return {
        restrict: 'C',
        link: function(scope, element) {
            element.lightGallery({
                enableTouch: true
            });
        }
    }
}
