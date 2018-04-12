angular
    .module('app.nameList')
    .component('nameList', {
        templateUrl: 'app/components/nameList/nameList.template.html',
        controller: nameListCtrl,
        controllerAs: 'nameCtrl'
    });

nameCategoriesCtrl.$inject = ['$scope', '$routeParams', 'dataService', '$log'];

function nameListCtrl($scope, $routeParams, dataService, $log)
{

}