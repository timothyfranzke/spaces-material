commandCenterApp.controller(
    'createController',
    [
        '$mdDialog',
        '$scope',
        function($scope, $mdDialog){
            $scope.openFacultyDialog = function(ev){
                console.log("open faculty dialog");
                $mdDialog.show({
                    controller: 'dialogController',
                    templateUrl: 'app/modules/command-center/command-center-content/create/dialogs/facuilt-dialog.view.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose:true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                })
                    .then(function(answer) {
                        $scope.status = 'You said the information was "' + answer + '".';
                    }, function() {
                        $scope.status = 'You cancelled the dialog.';
                    });
            }
        }
    ]
);