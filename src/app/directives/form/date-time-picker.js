'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .directive('dateTimePicker', dateTimePicker);

function dateTimePicker() {
    return {
        restrict: 'C',
        require: '?ngModel',
        link: function(scope, element) {
            element.datetimepicker();
        }
    }
}

