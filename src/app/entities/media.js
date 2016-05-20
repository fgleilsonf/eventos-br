'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .factory('Media', Media);

function Media($resource) {
    var url = 'http://localhost:8000/medias/:id';
    var params = { id: '@id'};

    var options =  {
        update: {
            method: 'PUT'
        }
    };

    return $resource(url, params, options);
}
