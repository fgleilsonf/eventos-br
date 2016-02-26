'use strict';

var angular = require('angular');
var $ = require('jquery');

angular
    .module('webAdminApp')
    .service('scrollService', scrollService);

function scrollService() {
    var ss = {};
    ss.malihuScroll = function scrollBar(selector, theme, mousewheelaxis) {
        $(selector).mCustomScrollbar({
            theme: theme,
            scrollInertia: 100,
            axis:'yx',
            mouseWheel: {
                enable: true,
                axis: mousewheelaxis,
                preventDefault: true
            }
        });
    }

    return ss;
}
