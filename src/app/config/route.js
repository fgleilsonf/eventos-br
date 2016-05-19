'use strict';

require('./app')
    .config(RouteConfig);

function RouteConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
        .when('', 'events.list')
        .when('/', 'events.list')
        .otherwise('/events/list');

    $stateProvider
        .state ('friends', {
            url: '/friends',
            templateUrl: 'views/friends/index.html'
        })
        .state ('friends.list', {
            url: '/list',
            templateUrl: 'views/friends/list-friends.html'
        })
        .state ('events', {
            url: '/events',
            templateUrl: 'views/events/index.html'
        })
        .state ('events.add', {
            url: '/new',
            templateUrl: 'views/events/add.html'
        })
        .state ('events.agenda', {
            url: '/agenda',
            templateUrl: 'views/events/agenda.html'
        })
        .state ('events.list', {
            url: '/list',
            templateUrl: 'views/events/list.html'
        })
        .state ('about', {
            url: '/about',
            templateUrl: 'views/pages/about.html'
        })
        .state ('profile', {
            url: '/profile',
            templateUrl: 'views/profile/index.html'
        })
        .state ('profile.about', {
            url: '/profile-about',
            templateUrl: 'views/profile/about.html'
        })
        .state ('profile.timeline', {
            url: '/profile-timeline',
            templateUrl: 'views/profile/timeline.html'
        })
        .state ('profile.photos', {
            url: '/profile-photos',
            templateUrl: 'views/profile/photos.html'
        })
        .state ('profile.connections', {
            url: '/profile-connections',
            templateUrl: 'views/profile/connections.html'
        });
};
