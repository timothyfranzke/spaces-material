commandCenterApp.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('command-center.home', {
            url: '/command-center',
            template: '<div>we are here!</div><command-center-navigation></command-center-navigation>'
        });

    $urlRouterProvider.otherwise('home')
});