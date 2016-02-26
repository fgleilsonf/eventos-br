'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .directive('stopPropagate', stopPropagate);

function stopPropagate() {
    return {
        restrict: 'C',
        link: function(scope, element) {
            element.on('click', function(event){
                event.stopPropagation();
            });
        }
    }
}
