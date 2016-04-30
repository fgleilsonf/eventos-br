'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .service('eventService', EventService);

function EventService($http) {

    var url = 'http://localhost:8000/events';

    this.get = function() {
        return $http.get(url);
    };

    this.add = function(data) {
        return $http.post(url, data);
    };
}
