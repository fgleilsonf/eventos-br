'use strict';


var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('ListFriedsController', ListFriedsController);

function ListFriedsController(Facebook, userService) {
    var self = this;

    self.friends = [];

    Facebook.getLoginStatus(function() {
        userService.getFriends().then(function (response) {
            self.friends = response.data;
        });
    });
}
