import angular from 'angular';
import routing from './modal.route';
import modalComponent from './modal.component';
import modalService from './modal.service';
/* @ngInject */
angular
  .module('modal', [])
  .component('modal', modalComponent)
  .factory('modalService', modalService)
  .config(routing);
