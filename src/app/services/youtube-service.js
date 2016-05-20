'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .service('youtubeService', YoutubeService);

function YoutubeService() {
    var self = this;

    self.isYoutubeUrl = function(url) {
        var v = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/; // jshint ignore:line
        return (url.match(v)) ? RegExp.$1 : false;
    };

    self.extractCodeFromUrl = function (url) {
        return  url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
    };
}
