'use strict';

var angular = require('angular');

require('lightgallery/dist/js/lightgallery');

angular
    .module('webAdminApp')
    .controller('profileCtrl', profileCtrl);

function profileCtrl(growlService) {

    //Get Profile Information from profileService Service

    //User
    this.profileSummary = "Sed eu est vulputate, fringilla ligula ac, maximus arcu. Donec sed felis vel magna mattis ornare ut non turpis. Sed id arcu elit. Sed nec sagittis tortor. Mauris ante urna, ornare sit amet mollis eu, aliquet ac ligula. Nullam dolor metus, suscipit ac imperdiet nec, consectetur sed ex. Sed cursus porttitor leo.";

    this.fullName = "Mallinda Hollaway";
    this.gender = "female";
    this.birthDay = "23/06/1988";
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
