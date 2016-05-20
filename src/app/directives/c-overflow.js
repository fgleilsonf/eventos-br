'use strict';

var $ = require('jquery');
var angular = require('angular');

angular
    .module('webAdminApp')
    .directive('cOverflow', cOverflow);

function cOverflow(scrollService) {
    return {
        restrict: 'C',
        link: function(scope, element, attributes) {
            var axis = attributes.axis || 'xy';
            if (!$('html').hasClass('ismobile')) {
                scrollService.malihuScroll(element, 'minimal-dark', 'y', axis);
            }
        }
    };
}
