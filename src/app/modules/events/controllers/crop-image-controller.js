'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('CropImageController', CropImageController);

function CropImageController($scope, $timeout, $stateParams) {

  $scope.enabledSave = true;
  $scope.image = '';
  $scope.resultBlob = '';

  var handleFileSelect = function(evt) {
    $scope.isLoadImage = true;

    var file = evt.currentTarget.files[0];
    var reader = new FileReader();
    reader.onload = function (evt) {
      $scope.$apply(function($scope) {
        $scope.enabledSave = false;
        $scope.image = evt.target.result;
      });
    };
    reader.readAsDataURL(file);
  };

  $scope.uploadCover = function() {
    Upload.upload({
      url: server.formatCampaignAddImagesUrl(session.getAccessToken(), $stateParams.campaignId),
      file: $scope.resultBlob
    }).progress(function() {
      $scope.$emit(toastConstants.PROGRESS, 'Adicionando imagem');
    }).success(function (data, status) {
      if (status === 200) {
        syncService.sync().then(function () {
          $scope.$emit(toastConstants.INFO, 'Imagem adicionada com sucesso');
          $scope.$close();
        });
      } else {
        $scope.$emit(toastConstants.ERROR, 'Falha ao adicionar imagem');
      }
    }).catch(function () {
      $scope.$emit(toastConstants.ERROR, 'Falha ao adicionar imagem');
    });
  };

  $scope.onLoadError = function() {
    $scope.$emit(toastConstants.WARNING, 'There was an error loading the image');
  };

  $scope.close = function() {
    $scope.$close();
  };

  $timeout(function() {
    angular.element('#fileImage').on('change', handleFileSelect);
  }, 250);
}

