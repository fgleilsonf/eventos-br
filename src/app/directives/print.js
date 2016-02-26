'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .directive('print', print);

function print() {
    return {
        restrict: 'A',
        link: function(scope, element){
            element.click(function(){
                window.print();
            })
        }
    }
}
