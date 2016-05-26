'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('AddImageEventController', AddImageEventController);

function AddImageEventController($scope, $stateParams, Media, modalService) {

    var self = this;

    self.photoColumn = 'col-md-2';
    self.photoColumnSize = 2;

    self.photoOptions = [
        { value: 1, column: 6 },
        { value: 2, column: 4 },
        { value: 3, column: 3 }
    ];

    self.photoGrid = function(size) {
        self.photoColumn = 'col-md-'+size;
        self.photoColumnSize = size;
    };

    self.cropImage = function () {
        var modalOptions = {
            animation: true,
            backdrop: 'static',
            templateUrl: 'views/events/detail/crop-image.html',
            controller: 'CropImageController',
            size: 'lg'
        };

        modalService.showModal(modalOptions).then(load_);
    };

    self.image = {
        url: '',
        event_id: $stateParams.eventId,
        type: 1
    };

    var load_ = function () {
        Media.query({event_id: $stateParams.eventId, type: 1}, function (images) {
            console.log('videos', images);

            self.images = images;
        });
    };

    load_();

    self.save = function() {
        var media = new Media(self.image);
        media.user_id = 1;

        media.$save(load_);
    };

    self.close = function() {
        $scope.$close();
    };
}
