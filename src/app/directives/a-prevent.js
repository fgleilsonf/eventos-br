'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .directive('aPrevent', aPrevent);

function aPrevent() {
    return {
        restrict: 'C',
        link: function(scope, element) {
            element.on('click', function(event){
                event.preventDefault();
            });
        }
    }
}
