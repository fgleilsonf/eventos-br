'use strict';

require('./app')
    .config(RouteConfig);

function RouteConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
        .when('', 'events.agenda')
        .when('/', 'events.agenda')
        .otherwise('/errors/404');

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: 'views/home/main.html'
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

//'use strict';
//
//function UiRouter($stateProvider, $urlRouterProvider) {
//
//    var template_ = '<div ui-view class="fade-in-right-big smooth"></div>';
//
//    $urlRouterProvider
//        .when('', 'dashboard')
//        .when('/', 'dashboard')
//        .otherwise('/errors/404');
//
//    $stateProvider
//        .state('account', {
//            url: '/account',
//            template: template_,
//            resolve: {
//                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
//                    return $ocLazyLoad.load({
//                        name: 'account',
//                        files: ['account/index.js']
//                    });
//                }]
//            }
//        })
//        .state('account.service_terms', {
//            url: '/service_terms',
//            templateUrl: '../../account/service-terms/view/index.html'
//        })
//        .state('account.sign_in', {
//            url: '/sign_in',
//            templateUrl: '../../account/sign-in/view/index.html'
//        })
//        .state('account.sign_up', {
//            url: '/sign_up',
//            templateUrl: '../../account/sign-up/view/index.html'
//        })
//        .state('account.confirm_email', {
//            url: '/confirm_email',
//            templateUrl: '../../account/email/view/index.html'
//        })
//        .state('account.forgot_password', {
//            url: '/forgot_password',
//            templateUrl: '../../account/forgot-password/view/index.html'
//        })
//        .state('account.bootstrap', {
//            url: '/bootstrap',
//            templateUrl: '../../account/bootstrap/view/index.html'
//        })
//        .state('app', {
//            abstract: true,
//            url: '/',
//            templateUrl: '../../container.html',
//            data: {
//                requiresAuth: true,
//                requiresIsilistDB: true
//            },
//            resolve: {
//                deps: ['$state', '$q', '$log', 'isilistDB', 'syncService', 'session',
//                    function ($state, $q, $log, isilistDB, syncService, session) {
//                        var checkAuth = function(resolve, reject) {
//                            if (!session.isAuthenticated()) {
//                                reject(new Error('Not authenticate'));
//                                $state.go('account.sign_in');
//                                return false;
//                            }
//                            return true;
//                        };
//                        return $q(function (resolve, reject) {
//                            if (isilistDB.isConnected()) {
//                                if (checkAuth(resolve, reject)) {
//                                    resolve(true);
//                                }
//                            } else {
//                                return isilistDB
//                                    .connect()
//                                    .then(function () {
//                                        return isilistDB
//                                            .isEmpty()
//                                            .then(function (isEmpty) {
//                                                if (isEmpty) {
//                                                    $state.go('account.sign_in');
//                                                    reject(new Error('Database connected is empty.'));
//                                                } else {
//                                                    if (checkAuth(resolve, reject)) {
//                                                        syncService.sync();
//                                                        resolve(true);
//                                                    }
//                                                }
//                                            }, function (error) {
//                                                $log.error('Error verifying if database is Empty: ', error);
//                                            });
//                                    }, function (error) {
//                                        $state.go('account.sign_in');
//                                        reject(error);
//                                    });
//                            }
//                        });
//                    }
//                ]
//            }
//        })
//        .state('app.dashboard', {
//            url: 'dashboard',
//            templateUrl: '../../modules/dashboard/view/index.html',
//            resolve: {
//                deps: ['$ocLazyLoad',
//                    function ($ocLazyLoad) {
//                        return $ocLazyLoad.load({
//                            name: 'dashboard',
//                            files: ['dashboard/index.js']
//                        });
//                    }
//                ]
//            }
//        })
//
//        .state('app.lists', {
//            url: 'lists',
//            abstract: true,
//            templateUrl: '../../modules/lists/view/index.html',
//            resolve: {
//                deps: ['$ocLazyLoad',
//                    function ($ocLazyLoad) {
//                        return $ocLazyLoad.load({
//                            name: 'lists',
//                            files: ['lists/index.js']
//                        });
//                    }
//                ]
//            }
//        })
//        .state('app.lists.view', {
//            url: '/view?status',
//            templateUrl: '../../modules/lists/view/view.html'
//        })
//        .state('app.lists.detail', {
//            url: '/detail/:listId/',
//            abstract: true,
//            templateUrl: '../../modules/lists/view/detail.html'
//        })
//        .state('app.lists.detail.info', {
//            url: 'info',
//            templateUrl: '../../modules/lists/view/info.html'
//        })
//        .state('app.lists.detail.items', {
//            url: 'items',
//            templateUrl: '../../modules/lists/view/items.html'
//        })
//        .state('app.products', {
//            url: 'products',
//            abstract: true,
//            templateUrl: '../../modules/products/view/index.html',
//            resolve: {
//                deps: ['$ocLazyLoad',
//                    function ($ocLazyLoad) {
//                        return $ocLazyLoad.load({
//                            name: 'products',
//                            files: ['products/index.js']
//                        });
//                    }
//                ]
//            }
//        })
//
//        .state('app.campaigns', {
//            url: 'campaigns',
//            abstract: true,
//            templateUrl: '../../modules/campaigns/view/index.html',
//            resolve: {
//                deps: ['$ocLazyLoad',
//                    function ($ocLazyLoad) {
//                        return $ocLazyLoad.load({
//                            name: 'campaigns',
//                            files: ['campaigns/index.js']
//                        });
//                    }
//                ]
//            }
//        })
//        .state('app.campaigns.view', {
//            url: '/view?type',
//            templateUrl: '../../modules/campaigns/view/view.html'
//        })
//        .state('app.campaigns.add', {
//            url: '/add',
//            templateUrl: '../../modules/campaigns/view/add-campaign.html'
//        })
//        .state('app.campaigns.detail', {
//            url: '/detail/:campaignId/',
//            abstract: true,
//            templateUrl: '../../modules/campaigns/view/detail.html'
//        })
//        .state('app.campaigns.detail.info', {
//            url: 'info',
//            templateUrl: '../../modules/campaigns/view/info.html'
//        })
//        .state('app.campaigns.detail.items', {
//            url: 'items',
//            templateUrl: '../../modules/campaigns/view/items.html'
//        })
//
//        .state('app.products.view', {
//            url: '/view',
//            templateUrl: '../../modules/products/view/view.html'
//        })
//        .state('app.products.detail', {
//            url: '/detail/:productId/',
//            abstract: true,
//            templateUrl: '../../modules/products/view/detail.html'
//        })
//        .state('app.products.detail.edit', {
//            url: 'edit',
//            templateUrl: '../../modules/products/view/edit.html'
//        })
//        .state('app.products.detail.images', {
//            url: 'images',
//            templateUrl: '../../modules/products/view/images.html'
//        })
//        .state('app.profile', {
//            url: 'profile',
//            templateUrl: '../../modules/profile/view/index.html',
//            resolve: {
//                deps: ['$ocLazyLoad',
//                    function ($ocLazyLoad) {
//                        return $ocLazyLoad.load({
//                            name: 'profile',
//                            files: ['profile/index.js']
//                        });
//                    }]
//            }
//        })
//        .state('app.clients', {
//            url: 'clients',
//            abstract: true,
//            templateUrl: '../../modules/clients/view/index.html',
//            resolve: {
//                deps: ['$ocLazyLoad',
//                    function ($ocLazyLoad) {
//                        return $ocLazyLoad.load({
//                            name: 'clients',
//                            files: ['clients/index.js']
//                        });
//                    }
//                ]
//            }
//        })
//        .state('app.clients.view', {
//            url: '/view?only',
//            templateUrl: '../../modules/clients/view/view.html'
//        })
//        .state('app.clients.detail', {
//            url: '/detail/:clientId',
//            templateUrl: '../../modules/clients/view/detail.html'
//        })
//        .state('app.clients.invite', {
//            url: '/invite',
//            templateUrl: '../../modules/clients/view/invite.html'
//        })
//        .state('app.collaborators', {
//            url: 'collaborators',
//            abstract: true,
//            templateUrl: '../../modules/collaborators/view/index.html',
//            resolve: {
//                deps: ['$ocLazyLoad',
//                    function ($ocLazyLoad) {
//                        return $ocLazyLoad.load({
//                            name: 'collaborators',
//                            files: ['collaborators/index.js']
//                        });
//                    }
//                ]
//            }
//        })
//
//        .state('app.collaborators.view', {
//            url: '/view',
//            templateUrl: '../../modules/collaborators/view/view.html'
//        })
//        .state('app.collaborators.detail', {
//            url: '/detail/:collaboratorId',
//            abstract: true,
//            templateUrl: '../../modules/collaborators/view/detail.html'
//        })
//        .state('app.collaborators.detail.info', {
//            url: '/info',
//            templateUrl: '../../modules/collaborators/view/info.html'
//        })
//        .state('app.collaborators.detail.clients', {
//            url: '/clients',
//            templateUrl: '../../modules/collaborators/view/attended-clients/attended-clients.html'
//        })
//        .state('app.collaborators.new', {
//            url: '/new',
//            templateUrl: '../../modules/collaborators/view/new-collaborators/new-collaborators.html'
//        })
//        .state('app.collaborators.new_delegation', {
//            url: '/:collaboratorId/new_delegation',
//            templateUrl: '../../modules/collaborators/view/attended-clients/new-delegation.html'
//        })
//
//        .state('app.settings', {
//            url: 'settings',
//            templateUrl: '../../modules/settings/view/index.html',
//            resolve: {
//                deps: ['$ocLazyLoad',
//                    function ($ocLazyLoad) {
//                        return $ocLazyLoad.load({
//                            name: 'settings',
//                            files: ['settings/index.js']
//                        });
//                    }]
//            }
//        })
//
//        .state('errors', {
//            url: '/errors',
//            template: template_
//        })
//        .state('errors.404', {
//            url: '/404',
//            templateUrl: '../../errors/404.html'
//        });
//}
//UiRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
//
//require('./module').config(UiRouter);
