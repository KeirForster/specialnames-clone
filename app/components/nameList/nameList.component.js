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
    vm.gender = $routeParams.gender;
    vm.imgSrcBase = 'app/assets/img/';
    vm.imgExt = '.png';
    $scope.loaderClass = vm.gender + '-cube-bg-color';
    $scope.loadingData = true;
    $scope.listClass = null;
    $scope.listItemOddClass = null;
    $scope.listItemEvenClass = 'list-item-even';
    $scope.nameList = [];

    activate();

    function activate()
    {
        dataService.getNames()
            .then(function(data)
            {
                addCatImgPaths(data);
                $scope.nameList = data;
                $scope.listItemOddClass = vm.gender + '-list-item';
                showList();
            });
    }

    function addCatImgPaths(data)
    {
        data.forEach(function(cat)
        {
            cat.img_path = vm.imgSrcBase + cat.cat_img + vm.imgExt;
        });
    }

    function showList()
    {
        $timeout(function()
        {
            $scope.loadingData = false;
            $scope.listClass = 'show';
        }, 100);
    }
}