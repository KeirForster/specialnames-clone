angular
    .module('app.nameCategories')
    .component('nameCategories', {
        templateUrl: 'app/components/nameCategories/nameCategories.template.html',
        controller: nameCategoriesCtrl,
        controllerAs: 'catCtrl'
    });

nameCategoriesCtrl.$inject = ['$scope', '$routeParams', 'dataService', '$log'];

function nameCategoriesCtrl($scope, $routeParams, dataService, $log)
{
    var vm = this;
    vm.gender = $routeParams.gender;
    vm.categories = [];
    vm.catFirstHalf = [];
    vm.catSecondHalf = [];
    $scope.selectedCategories = [];
    $scope.selectionFull = false;
    $scope.toggleCategory = toggleCategory;
    $scope.toggleMouseEnter = toggleMouseEnter;
    $scope.toggleMouseLeave = toggleMouseLeave;
    $scope.toggleSelCat = toggleSelCat;
    $scope.submitStyle = { hidden: true };

    activate();

    function activate()
    {
        return dataService.getNameCategories()
            .then(function(data)
            {
                vm.categories = data;
                vm.catFirstHalf = vm.categories.slice(0, vm.categories.length / 2);
                vm.catSecondHalf = vm.categories.slice(vm.categories.length / 2, vm.categories.length);
            });
    }

    function toggleSelCat(catSelName)
    {
        vm.categories.forEach(function(cat) {
            if (cat.name === catSelName)
            {
                toggleCategory(cat);
                return false;
            }
        });
    }

    function toggleCategory(cat)
    {
        if (!$scope.selectedCategories.includes(cat.name) && $scope.selectedCategories.length < 5)
        {
            // add the category to the selected list
            $scope.selectedCategories.push(cat.name);
            cat.style['background-color'] = '#000';
            cat.imgSrc = cat.images.toggle;
            if ($scope.selectedCategories.length === 5)
            {
                $scope.submitStyle['hidden'] = false;
            }
        }

        else if ($scope.selectedCategories.includes(cat.name))
        {
            // remove the category from the selected list
            $scope.selectedCategories.splice($scope.selectedCategories.indexOf(cat.name), 1);
            cat.style['background-color'] = '#fff';
            cat.imgSrc = cat.images.normal;
            $scope.submitStyle['hidden'] = true;
        }
    }

    function toggleMouseEnter(cat)
    {
        if (cat.imgSrc !== cat.images.toggle)
        {
            cat.style['background-color'] = '#000';
            cat.imgSrc = cat.images.toggle;
        }
    }

    function toggleMouseLeave(cat)
    {
        if (!$scope.selectedCategories.includes(cat.name))
        {
            cat.style['background-color'] = '#fff';
            cat.imgSrc = cat.images.normal;
        }
    }
}