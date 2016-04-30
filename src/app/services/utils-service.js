'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .service('utilsService', UtilsService);

function UtilsService() {
  var self = this;

  self.isYoutubeUrl = function(url) {
    var v = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/; // jshint ignore:line
    return (url.match(v)) ? RegExp.$1 : false;
  };
}
