'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .service('userService', UserService);

function UserService(Facebook) {
    this.get = function() {
        var url = '/me?fields=id,name,email,picture.type(large),cover';
        return Facebook.api(url, function(response) {
            return {
                name: response.name,
                cover_image: response.cover.source,
                profile_image: response.picture.data.url
            };
        });
    }
}
