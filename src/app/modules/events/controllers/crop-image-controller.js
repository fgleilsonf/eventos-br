'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('CropImageController', CropImageController);

function CropImageController($scope, $timeout, $stateParams, Upload, growlService) {

  $scope.enabledSave = true;
  $scope.image = '';
  $scope.resultBlob = '';
  $scope.resultImage = '';

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
        method: 'POST',
        url: 'http://localhost:8000/medias/upload',
        file: $scope.resultBlob,
        data: {
            id: $stateParams.eventId,
            user_id: 1,
            type: 1
        }
    }).progress(function() {
    }).success(function (data, status) {
        console.log('data', data);
      if (status === 200) {
          growlService.growl('Imagem adicionada com sucesso', 'inverse');
          $scope.$close();
      } else {
          growlService.growl('Erro ao realizar upload', 'inverse');
      }
    }).catch(function () {
        growlService.growl('Erro ao realizar upload', 'inverse');
    });
  };

  $scope.onLoadError = function() {
    console.log('sdfsdfds');
  };

  $scope.close = function() {
    $scope.$close();
  };

  $timeout(function() {
    angular.element('#fileImage').on('change', handleFileSelect);
  }, 250);
}

