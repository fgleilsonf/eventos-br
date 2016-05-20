'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('AddEventController', AddEventController);

function AddEventController($scope, Event) {

    var self = this;

    self.event = {};

    self.save = function() {
        var event = new Event(self.event);
        event.user_id = 1;

        event.$save(function () {
            $scope.$close(event);
        });
    };

    self.close = function() {
        $scope.$close();
    };
}
