import angular from 'angular';
import uirouter from 'angular-ui-router';
import modal from './components/modal/modal.module';
import satinize from 'angular-sanitize'
import inputMask from 'angular-input-masks'

require('./assets/sass/helpers.scss');
require('./assets/sass/form.scss');
require('./assets/sass/main.scss');
angular.module('app', [
  uirouter,
  satinize,
  inputMask,
  'modal'
]);
