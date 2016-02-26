'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .directive('toggleSubmenu', toggleSubmenu);

function toggleSubmenu() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.click(function(){
                element.next().slideToggle(200);
                element.parent().toggleClass('toggled');
            });
        }
    }
}
