'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('Home/MainController', MainController);

function MainController() {

    var vm = this;

    vm.name = 'Gleilson';

}
