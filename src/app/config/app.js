'use strict';

var angular = require('angular');

var globalDependencies = [
    require('angular-resource'),
    require('angular-ui-router'),
    require('angular-sanitize'),
    require('angular-translate'),
    require('angular-loading-bar'),
    require('oclazyload'), 
    require('angular-ui-bootstrap'),
    require('ng-table/dist/ng-table') && 'ngTable',
    require('angular-animate'),
    require('angular-input-masks')
];

module.exports = angular.module('webAdminApp', globalDependencies);
