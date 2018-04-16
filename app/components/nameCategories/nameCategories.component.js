angular
    .module('app.nameCategories')
    .component('nameCategories', {
        templateUrl: 'app/components/nameCategories/nameCategories.template.html',
        controller: catCtrl,
        controllerAs: 'catCtrl'
    });

catCtrl.$inject = ['$scope', '$timeout', '$routeParams', 'dataService', '$log'];

function catCtrl($scope, $timeout, $routeParams, dataService, $log)
{
    var vm = this;
    vm.gender = $routeParams.gender;
    vm.alert = null;
    $scope.categories = [];
    $scope.selectedCatNames = [];
    $scope.selectedCatsIsFull = false;
    $scope.btnClass = 'btn-' + vm.gender;
    $scope.catCardClass = null;
    $scope.toggleCat = toggleCat;
    $scope.submit = submit;
    $scope.mouseenter = mouseenter;
    $scope.mouseleave = mouseleave;

    activate();

    function activate()
    {
        dataService.getNameCategories()
            .then(function(data)
            {
                data.forEach(function(cat)
                {
                    cat.img_path = 'app/assets/img/' + cat.cat_img + '.png';
                });
                $scope.categories = data;
                $timeout(function()
                {
                    $scope.catCardClass = 'show';
                }, 100);
            });
    }

    function submit()
    {
        dataService.selectedCategories = $scope.selectedCatNames;
    }

    function mouseenter(cat)
    {
        if (catIsSelected(cat))
            toggleCatImgOverlayIcon(cat, 'fa-times-circle');
    }

    function mouseleave(cat)
    {
        if (catIsSelected(cat))
            toggleCatImgOverlayIcon(cat, 'fa-check-circle');
    }

    function toggleCat(cat)
    {
        if ($scope.selectedCatsIsFull && !catIsSelected(cat))
        {
            // the selected categories list is full and cat is clicked
            // show the alert message
            displayAlert();
        }

        else if (!catIsSelected(cat))
        {
            // category is not in the list
            // add the category to the selected list
            // change the overlay icon to checked
            // show the overlay icon always
            // darken the image
            addCat(cat.cat_name);
            toggleCatImgOverlayIcon(cat, 'fa-check-circle');
            toggleCatImgOverlayOpacity(cat);
            toggleCatImageFilter(cat);
        }

        else
        {
            // category is already in the list
            // remove the category from the selected list
            // change the overlay icon to plus
            // show the overlay icon only on hover
            // toggle the image brightness
            removeCat(cat.cat_name);
            toggleCatImgOverlayIcon(cat, 'fa-plus-circle');
            toggleCatImgOverlayOpacity(cat);
            toggleCatImageFilter(cat);
        }
    }

    function catIsSelected(cat)
    {
        return $scope.selectedCatNames.includes(cat.cat_name);
    }

    function addCat(catName)
    {
        $scope.selectedCatNames.push(catName);
        if ($scope.selectedCatNames.length === 5)
            $scope.selectedCatsIsFull = true;
    }

    function removeCat(catName)
    {
        if (alertIsDisplayed())
            closeAlert();
        $scope.selectedCatNames.splice($scope.selectedCatNames.indexOf(catName), 1);
        $scope.selectedCatsIsFull = false;
    }

    function toggleCatImageFilter(cat)
    {
        let catImg = document.querySelector('#cat-' + cat.cat_name + ' img');
        catImg.classList.toggle('img-dark');
    }

    function toggleCatImgOverlayIcon(cat, iconClass)
    {
        let catIcon = document.querySelector('#cat-' + cat.cat_name + ' .cat-img-overlay .icon');
        catIcon.removeChild(catIcon.children[0]);
        let iconChild = document.createElement('i');
        iconChild.classList.add('fas');
        iconChild.classList.add(iconClass);
        catIcon.appendChild(iconChild);
    }

    function toggleCatImgOverlayOpacity(cat)
    {
        let catImgOverlay = document.querySelector('#cat-' + cat.cat_name + ' .cat-img-overlay');
        catImgOverlay.classList.toggle('show-icon');
    }

    function displayAlert()
    {
        if (!alertIsInDom())
        {
            // alert is not in the dom
            // append the alert node to the dom
            // clone the newly appended alert node
            let catAlert = document.querySelector('#categories-alert');
            catAlert.appendChild(vm.alert);
            vm.alert = null;
            vm.alert = catAlert.children[0].cloneNode(true);
            // vm.alert = catAlert.childList;
        }
        else if (alertIsInDom() && !alertIsDisplayed())
        {
            // alert is in the dom
            // display the alert
            // clone the alert node
            let alert = document.querySelector('#categories-alert .alert');
            alert.classList.remove('d-none');
            vm.alert = alert.cloneNode(true);
        }
    }

    function closeAlert()
    {
        $('#categories-alert .alert').alert('close');
    }

    function alertIsInDom()
    {
        return document.querySelector('#categories-alert .alert');
    }

    function alertIsDisplayed()
    {
        let alert = document.querySelector('#categories-alert .alert');
        return alert && !alert.classList.contains('d-none');
    }
}