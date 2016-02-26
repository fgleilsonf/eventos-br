'use strict';

var angular = require('angular');
var $ = require('jquery');

angular
    .module('webAdminApp')
    .service('growlService', growlService);

function growlService() {
    var gs = {};
    gs.growl = function(message, type) {
        $.notify({
           message: message
        },{
           type: type,
           allow_dismiss: false,
           label: 'Cancel',
           className: 'btn-xs btn-inverse',
           placement: {
               from: 'top',
               align: 'right'
           },
           delay: 2500,
           animate: {
               enter: 'animated bounceIn',
               exit: 'animated bounceOut'
           },
           offset: {
               x: 20,
               y: 85
           }
        });
    }

    return gs;
}
