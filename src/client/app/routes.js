spacesApp.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.
        state('home', {
            url: '/home',
            template: '<div>guides login</div>'
        })
        .state('command-center', {
            abstract:true,
            template: '<ui-view></ui-view>'
        });

    $urlRouterProvider.otherwise('home')
});