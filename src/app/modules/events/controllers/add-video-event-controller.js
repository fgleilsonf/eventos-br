'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('AddVideoEventController', AddVideoEventController);

function AddVideoEventController($scope, Media, $stateParams) {

    var self = this;

    self.video = {
        url: '',
        event_id: $stateParams.eventId,
        type: 2
    };

    self.isYoutubeUrl = function() {
        var v = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/; // jshint ignore:line
        return (self.video.url.match(v)) ? RegExp.$1 : false;
    };

    var load_ = function () {
        Media.query({event_id: $stateParams.eventId}, function (videos) {
            console.log('videos', videos);

            self.videos = videos;
        });
    };

    load_();

    self.save = function() {
        var media = new Media(self.video);
        media.user_id = 1;

        media.$save(load_);
    };

    self.close = function() {
        $scope.$close();
    };
}
