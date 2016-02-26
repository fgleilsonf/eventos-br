'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .directive('changeLayout', ChangeLayout);

function ChangeLayout() {

    return {
        restrict: 'A',
        scope: {
            changeLayout: '='
        },

        link: function(scope, element, attr) {

            //Default State
            if(scope.changeLayout === '1') {
                element.prop('checked', true);
            }

            //Change State
            element.on('change', function(){

                console.log('Alteração do layout', scope.changeLayout);

                if(element.is(':checked')) {
                    localStorage.setItem('ma-layout-status', 1);
                    scope.$apply(function(){
                        scope.changeLayout = '1';
                    })
                }
                else {
                    localStorage.setItem('ma-layout-status', 0);
                    scope.$apply(function(){
                        scope.changeLayout = '0';
                    })
                }
            })
        }
    }
}



