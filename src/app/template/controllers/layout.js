'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('LayoutController', LayoutController);

function LayoutController($timeout, $state, $scope, growlService, Facebook, userService) {
    //Welcome Message
    growlService.growl('Bem vindo ao Eventos BR', 'inverse');

    var self = this;

    self.getUser = function() {
        userService.get().then(function(data) {
            self.user = data;

            self.user.cover_image = data.cover.source;
            self.user.profile_image = data.picture.data.url;

            console.log('self.user ', self.user );
        });
    };

    self.login = function() {
        Facebook.getLoginStatus(function(response) {
            if(response.status === 'connected') {
                self.getUser();
            } else {
                Facebook.login(function() {
                    self.getUser();
                });
            }
        });
    };

    // Detact Mobile Browser
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        angular.element('html').addClass('ismobile');
    }

    // By default Sidbars are hidden in boxed layout and in wide layout only the right sidebar is hidden.
    this.sidebarToggle = {
        left: false,
        right: false
    };

    // By default template has a boxed layout
    this.layoutType = localStorage.getItem('ma-layout-status');

    // For Mainmenu Active Class
    this.$state = $state;

    //Close sidebar on click
    this.sidebarStat = function(event) {

        console.log('this.sidebarStat: event', event);

        if (!angular.element(event.target).parent().hasClass('active')) {
            this.sidebarToggle.left = false;
        }

        console.log('this.sidebarToggle.left', this.sidebarToggle.left);
    };

    //Listview Search (Check listview pages)
    this.listviewSearchStat = false;

    this.lvSearch = function() {
        this.listviewSearchStat = true;
    }

    //Listview menu toggle in small screens
    this.lvMenuStat = false;

    //Blog
    this.wallCommenting = [];

    this.wallImage = false;
    this.wallVideo = false;
    this.wallLink = false;

    //Skin Switch
    this.currentSkin = 'green';

    this.skinList = [
        'lightblue',
        'bluegray',
        'cyan',
        'teal',
        'green',
        'orange',
        'blue',
        'purple'
    ]

    this.skinSwitch = function (color) {
        this.currentSkin = color;
    };

    Facebook.getLoginStatus(function(response) {
        if(response.status === 'connected') {
            self.getUser();
        }
    });

    self.logout = function() {
        Facebook.logout();
    };
};
