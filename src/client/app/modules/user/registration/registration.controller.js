userApp.controller(
    'registration.controller',
    [
        '$scope',
        function($scope){
            $scope.user = {};
            $scope.submitUser = function(user)
            {
                console.log(user.$dirty);
            }
        }
    ]
);