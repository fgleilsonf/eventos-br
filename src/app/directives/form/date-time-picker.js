'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .directive('dateTimePicker', dateTimePicker);

function dateTimePicker() {
    return {
        restrict: 'C',
        link: function(scope, element) {

            console.log('asdasdasdas');

            element.datetimepicker();
        }
    }
}

