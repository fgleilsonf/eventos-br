'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .service('routesService', RoutesService);

function RoutesService($state, $stateParams) {

  /**
   * Redireciona a tela passando os mesmos parâmetros do estado atual.
   * @param route
   */
  this.goWithSameParameters = function (route){
    $state.go(route, $stateParams);
  };

  /**
   * Adiciona um parâmetro no estado atual.
   * @param options
   */
  this.putParameter = function (options) {
    $state.go($state.current, angular.extend({}, $stateParams, options));
  };

  /**
   * Redireciona a tela passando o objeto informado.
   * @param route
   * @param object
   */
  this.go = function (route, object) {
    $state.go(route, object);
  };

  /**
   * Informa se a rota informada é a atual.
   * @param route
   * @returns {boolean}
   */
  this.isActive = function (route){
    return $state.is(route);
  };

  /**
   * Recarrega o estado atual.
   */
  this.reloadState = function () {
    $state.go($state.current, {}, { reload: true });
  };

  /**
   * Atualiza o estado atual com o objeto informado.
   * @param object
   */
  this.updateState = function (object) {
    $state.go($state.current, object);
  };

  /**
   * Retorna a instância de $stateParams.
   * @returns {$stateParams}
   */
  this.params = function () {
    return $stateParams;
  };
}
