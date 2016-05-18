'use strict';


var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('ListEventController', ListEventController);

function ListEventController($scope, eventService, Spotify) {
    var self = this;

    self.events = [];
    self.countComments = 0;

    self.login = function () {
        Spotify.login().then(function(data) {
            Spotify.setAuthToken(data);
            Spotify.getTracksAudioFeatures('5wZUvwWGKaZ6NG8yckZcTM').then(function (data) {
                console.log(data);
            });
        });

        //Spotify
        //    .getFeaturedPlaylists({ locale: "nl_NL", country: "NL" })
        //    .then(function (data) {
        //        console.log(data);
        //    });
    };
    //Spotify.getAlbum('2xtRHrXduvq6S7rrzmS0dK').then(function (data) {
    //    console.log(data);
    //});

    var loadEvents_ = function() {
       eventService.get().success(function(response) {
           self.events = response;

           console.log('self.events', self.events);
       });
    };

    self.myInterval = 0;

    self.slides = [
        {
            img: 'c-1.jpg',
            title: 'First Slide Label',
            text: 'Some sample text goes here...'
        },
        {
            img: 'c-2.jpg',
            title: 'Second Slide Label',
            text: 'Some sample text goes here...'
        },
        {
            img: 'c-3.jpg'
        }
    ];

    var onLoadListComments_ = function (event, countComments) {
        self.countComments = countComments;
    };

    $scope.$on('call-load-list-comments', onLoadListComments_);

    loadEvents_();
}
