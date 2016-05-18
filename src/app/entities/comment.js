'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .factory('Comment', Comment);

function Comment($resource) {
    var url = 'http://localhost:8000/comments/:id';
    var params = { id: '@id'};

    var options =  {
        update: {
            method: 'PUT'
        }
    };

    return $resource(url, params, options);
}
