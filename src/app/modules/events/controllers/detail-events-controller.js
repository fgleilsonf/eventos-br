'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('DetailEventController', DetailEventController);

function DetailEventController($scope, $stateParams, Facebook, Event, userService, utilsService, growlService,
                               modalService) {

    var self = this;

    self.cropImage = function () {
        var modalOptions = {
            animation: true,
            backdrop: 'static',
            templateUrl: 'views/events/detail/crop-image.html',
            controller: 'CropImageController',
            size: 'lg'
        };

        modalService.showModal(modalOptions).then(function () {

        });
    };

    var loadEvent_ = function () {
        var eventId = $stateParams.eventId;

        Event.get({id: eventId}, function (event) {
            self.event = event;
        });
    };

    loadEvent_();

    self.event = {
        media_default_url: 'assets/img/default-image-event.jpg',
        invites: [],
        videos: []
    };

    var loadFriends_ = function () {
        Facebook.getLoginStatus(function() {
            userService.getFriends().then(function (response) {
                self.friends = response.data;
            });
        });
    };

    loadFriends_();

    self.isYoutubeUrl = function() {
        if (!self.urlYoutube) {
            return false;
        }

        return utilsService.isYoutubeUrl(self.urlYoutube)
    };

    self.addVideo = function() {
        var url = self.urlYoutube;
        var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

        if(videoid != null) {
            self.urlYoutube = '';
            self.event.videos.push( {id: videoid[1] });
        } else {
            growlService.growl('Url inválida', 'inverse');
        }
    };

    self.save = function() {

        console.log('self.event', self.event);

        // eventService.add(self.event);
        //
        // console.log('self.event', self.event);
    };

    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function ($event, opened) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope[opened] = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.options = {
        height: 300
    };
}
