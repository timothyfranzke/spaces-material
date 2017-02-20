commandCenterApp.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('command-center.home', {
            url: '/command-center',
            templateUrl:'app/modules/command-center/command-center.view.html'
        })
        .state('command-center.home.create', {
            url:'/create',
            templateUrl:'app/modules/command-center/command-center-content/create/create.view.html',
            controller: 'createController'
        });

    $urlRouterProvider.otherwise('home')
});