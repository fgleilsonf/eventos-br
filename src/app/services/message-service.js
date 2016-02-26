'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .service('messageService', MessageService);

function MessageService($resource) {
    this.getMessage = function(img, user, text) {
        var gmList = $resource("data/messages-notifications.json");

        return gmList.get({
            img: img,
            user: user,
            text: text
        });
    }
}
