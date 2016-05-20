'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('AddEventController', AddEventController);

function AddEventController(Facebook, $scope, Event, eventService, userService, utilsService, growlService) {

    var self = this;

    Facebook.getLoginStatus(function() {
        userService.getFriends().then(function (response) {
            self.friends = response.data;
        });
    });

    // Event.get({id: 10}, function(data) {
    //     console.log('event', data);
    // });

    userService.getFriends().then(function(data) {
        console.log('data', data);
    });

    self.event = {
        videos: []
    };

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
