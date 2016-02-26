'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .directive('toggleSidebar', toggleSidebar);

function toggleSidebar() {
    return {
        restrict: 'A',
        scope: {
            modelLeft: '=',
            modelRight: '='
        },

        link: function(scope, element, attr) {
            element.on('click', function(){

                if (element.data('target') === 'mainmenu') {
                    if (scope.modelLeft === false) {
                        scope.$apply(function(){
                            scope.modelLeft = true;
                        })
                    }
                    else {
                        scope.$apply(function(){
                            scope.modelLeft = false;
                        })
                    }
                }

                if (element.data('target') === 'chat') {
                    if (scope.modelRight === false) {
                        scope.$apply(function(){
                            scope.modelRight = true;
                        })
                    }
                    else {
                        scope.$apply(function(){
                            scope.modelRight = false;
                        })
                    }

                }
            })
        }
    }
}
