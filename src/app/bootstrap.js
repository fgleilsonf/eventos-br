'use strict';

var $ = require('jquery');

if (window.jQuery === undefined) {
    window.jQuery = $;
}

if (window.swal === undefined) {
    window.swal = require('sweetalert');
}

//require('mediaelement');
require('flot/jquery.flot');
require('CurvedLines/curvedLines');
require('flot.tooltip/js/jquery.flot.tooltip');
//require('flot/jquery.flot.resize');
require('malihu-custom-scrollbar-plugin')($);
require('bootstrap-notify/bootstrap-notify');
require('bootstrap-datetimepicker');
// require('ng-img-crop-full-extended/compile/unminified/ng-img-crop.js') && 'ngImgCrop',

require('./assets/fullcalendar.min');
require('./assets/fullcalendar.min');
require('./assets/input-mask');

require('./config');

require('./services');

require('./directives');

require('./template');
require('./home');
require('./modules');
require('./entities');

module.exports = 'app';
