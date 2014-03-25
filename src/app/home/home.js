angular.module( 'core9Dashboard.home', [
  'ui.router'
])

.config(function($stateProvider) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ 
      pageTitle: 'Home',
      sidebar: 'main'
    }
  });
})

.controller( 'HomeCtrl', function() {
})

;

