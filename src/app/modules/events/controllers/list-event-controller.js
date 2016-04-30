'use strict';


var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('ListEventController', ListEventController);

function ListEventController($scope, eventService, Spotify) {
    var vm = this;

    vm.login = function () {
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

    vm.events = [];

    var loadEvents_ = function() {
       eventService.get().success(function(response) {
           vm.events = response;

           console.log('vm.events', vm.events);

       });
    };

    vm.myInterval = 0;

    vm.slides = [
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

    loadEvents_();
}
