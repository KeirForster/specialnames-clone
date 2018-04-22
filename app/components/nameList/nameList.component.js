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
    vm.categories = null;
    vm.isRefreshing = false;

    $scope.showAlert = false;
    $scope.loaderClass = vm.gender + '-cube-bg-color';
    $scope.loadingData = true;
    $scope.listClass = null;
    $scope.listItemOddClass = null;
    $scope.listItemEvenClass = 'list-item-even';
    $scope.refreshClass = null;
    $scope.nameList = [];
    $scope.refreshNameList = refreshNameList;

    activate();

    function activate()
    {
        dataService.getNames()
        .then(function(data)
        {
            // names
            addCatImgPaths(data);
            $scope.nameList = data;
            $scope.listItemOddClass = vm.gender + '-list-item';
            showList();
            configNavBackBtn();
            return dataService.getSelectedCategories();
        })
        .then(function(data) {
            // selected categories
            vm.categories = data;
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

    function refreshNameList()
    {
        if (!vm.isRefreshing)
        {
            vm.isRefreshing = true;
            $scope.refreshClass = 'loading';
            dataService.getNames()
            .then(function(data)
            {
                // names
                addCatImgPaths(data);
                $scope.nameList = data;
                $timeout(function()
                {
                    $scope.refreshClass = null;
                    vm.isRefreshing = false;
                }, 100);
            })
            .catch(function(error)
            {
                showAlert();
            });
        }
    }

    function configNavBackBtn()
    {
        let navBackBtn = document.querySelector('#top-navbar .navbar-back-btn');
        navBackBtn.classList.remove('d-none');
        navBackBtn.href = '#!/' + vm.gender + '/categories';
    }
}