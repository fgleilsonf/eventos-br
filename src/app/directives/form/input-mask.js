'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .directive('inputMask', inputMask);

function inputMask() {
    return {
        restrict: 'A',
        scope: {
          inputMask: '='
        },
        link: function(scope, element){
            element.mask(scope.inputMask.mask);
        }
    }
}