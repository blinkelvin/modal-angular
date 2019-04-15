function modalRoutes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/modal');
  $urlRouterProvider.when('/', '/modal');
  $stateProvider
    .state('modal', {
      url: '/modal',
      component: 'modal'
    })
}
/* @ngInject */
export default modalRoutes;
