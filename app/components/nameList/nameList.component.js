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
    $scope.showAlert = false;
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
            })
            .catch(function(error)
            {
                showAlert();
            });
    }

    function addCatImgPaths(data)
    {
        data.forEach(function(cat)
        {
            cat.img_path = vm.imgSrcBase + cat.cat_img + vm.imgExt;
        });
    }

    function showAlert()
    {
        $scope.loadingData = false;
        $scope.showAlert = true;
        let alert = document.querySelector('#nameList-alert');
        alert.classList.remove('d-none');
        $timeout(function() {
            alert.classList.add('show-alert');
        }, 75);
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