'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .factory('event', EventModel);

function EventModel($resource) {
    var url = 'http://localhost:8000/events/:id';
    var params = { id: '@id'};

    var options =  {
        update: {
            method: 'PUT'
        }
    };

    return $resource(url, params, options);
}
