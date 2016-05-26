'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('ListEventController', ListEventController);

function ListEventController($scope, modalService, routesService,
                             Event, Media) {
    var self = this;

    self.events = [];
    self.countComments = 0;

    self.editEvent = function (event) {
        routesService.go('^.detail.info', {eventId: event.id});
    };

    self.deleteEvent = function (event) {
        var modalOptions = {
            bodyText: 'Deseja realmente deletar o evento: <strong>'+ event.title + '</strong> ?'
        };

        modalService.showModal({}, modalOptions).then(function() {
            event.$remove();
        });
    };

    self.openModalAddEvent = function () {
        var modalOptions = {
            animation: true,
            backdrop: 'static',
            templateUrl: 'views/events/modal-add-event.html',
            controller: 'AddEventController',
            controllerAs: 'addEventCtrl',
            size: 'lg'
        };

        modalService.showModal(modalOptions).then(function (event) {
            routesService.go('^.detail.info', {eventId : event.id});
        });
    };

    var loadEvents_ = function() {
        Event.query({user_id: 1}, function (events) {
            self.events = events;
        }, function(error) {
            self.error = "Falha ao carregar eventos";
        });
    };

    var onLoadListComments_ = function (event, countComments) {
        self.countComments = countComments;
    };

    $scope.$on('call-load-list-comments', onLoadListComments_);

    self.loadImages = function(event) {
        Media.query({event_id: event.id, type: 1}, function (images) {
            event.images = images;
        });
    };

    loadEvents_();
}
