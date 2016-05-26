'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .factory('User', User);

function User($resource) {
    var url = 'http://localhost:8000/users/:id';
    var params = { id: '@id'};

    var options =  {
        update: {
            method: 'PUT'
        }
    };

    return $resource(url, params, options);
}
