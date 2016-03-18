'use strict';

var angular = require('angular');
var autosize = require('autosize');

angular
    .module('webAdminApp')
    .directive('autoSize', autoSize);

function autoSize() {
    return {
        restrict: 'A',
        link: function(scope, element){
            if (element[0]) {
               autosize(element);
            }
        }
    }
}
