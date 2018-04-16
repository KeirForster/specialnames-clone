angular
    .module('app.nameList')
    .component('nameList', {
        templateUrl: 'app/components/nameList/nameList.template.html',
        controller: nameListCtrl,
        controllerAs: 'nameListCtrl'
    });

nameListCtrl.$inject = ['$scope', '$timeout', '$routeParams', 'dataService', '$log'];

function nameListCtrl($scope, $timeout, $routeParams, dataService, $log)
{
    let vm = this;
    $scope.loaderClass = $routeParams.gender + '-cube-bg-color';
    $scope.loadingData = true;
    $scope.listClass = null;
    $scope.nameList = [];

    $scope.clicktest = function() {
        $scope.loadingData = false;
        $scope.listClass = 'show';
    };

    activate();

    function activate()
    {
        dataService.getNames()
            .then(function(data)
            {
                $scope.nameList = data;
                $timeout(function()
                {
                    $scope.loadingData = false;
                    $scope.listClass = 'show';
                }, 100);
            });
    }
}