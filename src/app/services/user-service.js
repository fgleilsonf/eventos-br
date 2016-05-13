'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .service('userService', UserService);

function UserService(Facebook) {
    var self = this;

    self.get = function() {
        var url = '/me?fields=id,name,email,picture.type(large),cover';
        return Facebook.api(url, function(response) {
            return {
                name: response.name,
                cover_image: response.cover.source,
                profile_image: response.picture.data.url
            };
        });
    };

    self.getFriends = function() {
        var url = '/me/friends';
        return Facebook.api(url, function(response) {

            console.log('response', response);

            return response.data;
        });
    };
}
