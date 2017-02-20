spacesApp.directive(
    'loginToggle',
    function()
    {
        return {
            controller:'login-toggle.controller',
            templateUrl: 'app/navigation/login-toggle/login-toggle.view.html'
        }
    }
);
