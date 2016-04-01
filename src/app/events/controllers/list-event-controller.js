'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('ListEventController', ListEventController);

function ListEventController($scope) {

    var vm = this;

    vm.myInterval = 0;

    vm.slides = [
        {
            img: 'c-1.jpg',
            title: 'First Slide Label',
            text: 'Some sample text goes here...'
        },
        {
            img: 'c-2.jpg',
            title: 'Second Slide Label',
            text: 'Some sample text goes here...'
        },
        {
            img: 'c-3.jpg'
        }
    ];
}
