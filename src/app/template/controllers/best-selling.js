'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('bestSellingController', BestSellingController);

function BestSellingController(bestSellingService) {
    this.img = bestSellingService.img;
    this.name = bestSellingService.name;
    this.range = bestSellingService.range;

    this.bsResult = bestSellingService.getBestselling(this.img, this.name, this.range);
}
