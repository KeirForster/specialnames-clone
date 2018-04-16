angular
    .module('app.nameList')
    .component('nameList', {
        templateUrl: 'app/components/nameList/nameList.template.html',
        controller: nameListCtrl,
        controllerAs: 'nameListCtrl'
    });

nameListCtrl.$inject = ['$scope', '$routeParams', 'dataService', '$log'];

function nameListCtrl($scope, $routeParams, dataService, $log)
{
    let vm = this;
    $scope.loaderClass = $routeParams.gender + '-cube-bg-color';
    $scope.loadingData = true;
    $scope.listClass = null;
    $scope.clicktest = function() {
        $scope.loadingData = false;
        $scope.listClass = 'show';
    }

}