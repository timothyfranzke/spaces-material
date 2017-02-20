userApp.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('user.base',{
            abstract:true,
            templateUrl:'app/modules/user/user.view.html',
        })
        .state('user.base.registration',{
            url:'/user',
            templateUrl:'app/modules/user/registration/registration.view.html',
            controller:'registration.controller'
        })
        .state('user.base.login', {
            url: '/login',
            templateUrl:'app/modules/user/login/login.view.html',
            controller:'login.controller'
        })
        .state('user.base.profile', {
            url:'/profile',
            templateUrl:'app/modules/user/profile/profile.view.html',
            controller:'profile.controller'
        })
});