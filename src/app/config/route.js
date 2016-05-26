'use strict';

require('./app')
    .config(RouteConfig);

function RouteConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
        .when('', 'events.list')
        .when('/', 'events.list')
        .otherwise('/events/list');

    $stateProvider
        .state ('profile', {
            url: '/profile',
            templateUrl: 'views/profile/index.html'
        })
        .state ('profile.about', {
            url: '/about',
            templateUrl: 'views/profile/about.html'
        })
        .state ('profile.timeline', {
            url: '/timeline',
            templateUrl: 'views/profile/timeline.html'
        })
        .state ('profile.medias', {
            url: '/medias',
            templateUrl: 'views/profile/medias.html'
        })
        .state ('profile.connections', {
            url: '/connections',
            templateUrl: 'views/profile/connections.html'
        })
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
        .state('events.detail', {
            url: '/detail/:eventId/',
            templateUrl: 'views/events/detail/index.html'
        })
        .state ('events.detail.info', {
            url: '/info',
            templateUrl: 'views/events/detail/info.html'
        })
        .state ('events.detail.invites', {
            url: '/invites',
            templateUrl: 'views/events/detail/invites.html'
        })
        .state ('events.detail.videos', {
            url: '/videos',
            templateUrl: 'views/events/detail/videos.html'
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
        });
};
