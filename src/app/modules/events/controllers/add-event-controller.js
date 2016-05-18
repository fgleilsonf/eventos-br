'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('AddEventController', AddEventController);

function AddEventController(Facebook, $scope, event, eventService, userService, utilsService, growlService) {

    var self = this;

    Facebook.getLoginStatus(function() {
        userService.getFriends().then(function (response) {
            self.friends = response.data;
        });
    });

    event.get({id: 10}, function(data) {
        console.log('event', data);
    });

    var vm = this;

    userService.getFriends().then(function(data) {
        console.log('data', data);
    });

    vm.event = {
        videos: []
    };

    vm.isYoutubeUrl = function() {
        if (!vm.urlYoutube) {
            return false;
        }

        return utilsService.isYoutubeUrl(vm.urlYoutube)
    };

    vm.addVideo = function() {
        var url = vm.urlYoutube;
        var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

        if(videoid != null) {
            vm.urlYoutube = '';
            vm.event.videos.push( {id: videoid[1] });
        } else {
            growlService.growl('Url inválida', 'inverse');
        }
    };

    vm.save = function() {

        console.log('vm.event', vm.event);

        // eventService.add(vm.event);
        //
        // console.log('vm.event', vm.event);
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
