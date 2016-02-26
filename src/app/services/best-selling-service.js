'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .service('bestSellingService', BestsellingService);

function BestsellingService($resource) {
    this.getBestselling = function(img, name, range) {
        var gbList = $resource("data/best-selling.json");

        return gbList.get({
            img: img,
            name: name,
            range: range,
        });
    }
}
