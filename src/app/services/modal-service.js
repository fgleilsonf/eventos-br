'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .service('modalService', ModalService);

function ModalService($uibModal) {
  var self = this;

  var modalDefaults = {
    backdrop: true,
    keyboard: true,
    modalFade: true,
    templateUrl: 'templates/confirm-dialog.html'
  };

  var modalOptions = {
    closeButtonText: 'Cancel',
    actionButtonText: 'OK',
    headerText: 'Atenção',
    bodyText: 'Deseja realmente confirmar a ação ?'
  };

  self.showModal = function (customModalDefaults, customModalOptions) {
    customModalDefaults = customModalDefaults || {};
    customModalDefaults.backdrop = customModalDefaults.backdrop || 'static';

    return self.show(customModalDefaults, customModalOptions);
  };

  self.show = function (customModalDefaults, customModalOptions) {
    var tempModalDefaults = {};
    var tempModalOptions = {};

    angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);
    angular.extend(tempModalOptions, modalOptions, customModalOptions);

    if (!tempModalDefaults.controller) {
      var modalController_ =  function ($scope, $uibModalInstance) {
        $scope.modalOptions = tempModalOptions;

        $scope.modalOptions.ok = function (result) {
          $uibModalInstance.close(result);
        };

        $scope.modalOptions.close = function () {
          $uibModalInstance.dismiss('cancel');
        };
      };

      tempModalDefaults.controller = ['$scope', '$uibModalInstance', modalController_];
    }

    return $uibModal.open(tempModalDefaults).result;
  };
}
