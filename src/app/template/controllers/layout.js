'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('LayoutController', LayoutController);

function LayoutController($timeout, $state, $scope, growlService){
    //Welcome Message
    growlService.growl('Bem vindo ao Eventos BR', 'inverse')


    // Detact Mobile Browser
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        angular.element('html').addClass('ismobile');
    }

    // By default Sidbars are hidden in boxed layout and in wide layout only the right sidebar is hidden.
    this.sidebarToggle = {
        left: false,
        right: false
    }

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
    }

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
    }
};
