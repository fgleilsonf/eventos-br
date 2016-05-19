'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .factory('Event', Event);

function Event($resource) {
    var url = 'http://localhost:8000/events/:id';
    var params = { id: '@id'};

    var options =  {
        update: {
            method: 'PUT'
        }
    };

    return $resource(url, params, options);
}
