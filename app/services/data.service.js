angular
    .module('app')
    .factory('dataService', dataService);

dataService.$inject = ['$http', '$q', '$log'];

function dataService($http, $q, $log)
{
    return {
        // getNames: getNames,
        getNameCategories: getNameCategories,
        selectedCategories: []
    };

    function getNames()
    {
        return $http.get('db/getNames.php')
            .then(getNamesComplete)
            .catch(getNamesFailed);

        function getNamesComplete(response)
        {
            return response.data;
        }

        function getNamesFailed(error) {
            var newMessage = 'XHR Failed for getNames';
            if (error.data && error.data.description) {
                newMessage = newMessage + '\n' + error.data.description;
            }
            error.data.description = newMessage;
            $log.error(newMessage);
            return $q.reject(error);
        }
    }

    function getNameCategories()
    {
        return $http.get('app/db/dataService.php')
            .then(getNameCatsComplete)
            .catch(getNameCatsFailed);

        function getNameCatsComplete(response)
        {
            return response.data;
        }

        function getNameCatsFailed(error) {
            var newMessage = 'XHR Failed for getNameCategories';
            if (error.data && error.data.description)
            {
                newMessage = newMessage + '\n' + error.data.description;
                error.data.description = newMessage;
            }
            $log.error(newMessage);
            return $q.reject(error);
        }
    }
}
