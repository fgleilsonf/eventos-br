'use strict';

var angular = require('angular');

require('lightgallery/dist/js/lightgallery');

angular
    .module('webAdminApp')
    .controller('ProfileCtrl', ProfileCtrl);

function ProfileCtrl($q, Media, eventService, growlService, userService, Facebook) {

    var self = this;
    self.showMedia = 1;

    var loadEvents_ = function() {
        eventService.get().success(function(response) {
            self.events = response;
        });
    };

    var loadMedias_ = function() {
        Media.query({event_id: 6}, function (medias) {
            self.medias = medias;

            console.log('self.medias', self.medias);

        });
    };

    loadEvents_();
    loadMedias_();

    Facebook.getLoginStatus(function() {
        userService.getFriends().then(function (response) {
            self.friends = response.data;
        });
    });

    //User
    this.profileSummary = "Sed eu est vulputate, fringilla ligula ac, maximus arcu. Donec sed felis vel magna mattis ornare ut non turpis. Sed id arcu elit. Sed nec sagittis tortor. Mauris ante urna, ornare sit amet mollis eu, aliquet ac ligula. Nullam dolor metus, suscipit ac imperdiet nec, consectetur sed ex. Sed cursus porttitor leo.";

    this.fullName = "Gleilson Ferreira";
    this.gender = "male";
    this.birthDay = "15/04/1995";
    this.martialStatus = "Single";
    this.mobileNumber = "00971123456789";
    this.emailAddress = "malinda.h@gmail.com";
    this.twitter = "@malinda";
    this.twitterUrl = "twitter.com/malinda";
    this.skype = "malinda.hollaway";
    this.addressSuite = "44-46 Morningside Road";
    this.addressCity = "Edinburgh";
    this.addressCountry = "Scotland";

    //Edit
    this.editSummary = 0;
    this.editInfo = 0;
    this.editContact = 0;


    this.submit = function(item, message) {
        if(item === 'profileSummary') {
            this.editSummary = 0;
        }

        if(item === 'profileInfo') {
            this.editInfo = 0;
        }

        if(item === 'profileContact') {
            this.editContact = 0;
        }

        growlService.growl(message+' has updated Successfully!', 'inverse');
    }
}
