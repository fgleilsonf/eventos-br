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
    require('angular-input-masks'),
    require('angular-input-masks/br'),
    require('angular-facebook') && 'facebook',
    require('angular-summernote/dist/angular-summernote') && 'summernote',
    require('angular-spotify') && 'spotify',
    require('ng-file-upload') && 'ngFileUpload',
    require('ng-img-crop-full-extended/compile/unminified/ng-img-crop.js') && 'ngImgCrop'
];

module.exports = angular.module('webAdminApp', globalDependencies)
    .config(function(FacebookProvider) {
        FacebookProvider.init('1688366168081881');
    }).config(function (SpotifyProvider) {
        SpotifyProvider.setClientId('f2c6a9a87444412f93c7fe5599f3f66c');
        SpotifyProvider.setRedirectUri('http://localhost.com/spotify.html');
        SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
    });
