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

require('./config');

require('./services');

require('./directives');

require('./template');
require('./home');
require('./profile');
require('./products');
require('./events');
require('./suppliers');

module.exports = 'app';
