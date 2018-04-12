angular
    .module('app')
    .factory('dataService', dataService);

dataService.$inject = ['$http', '$q', '$log'];

function dataService($http, $q, $log)
{
    return {
        // getNames: getNames,
        getNameCategories: getNameCategories
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
        var deferred = $q.defer();
        var categories = [
            { name: 'elegant',
                style: {},
                imgSrc: 'app/assets/img/sporty_black.png',
                images: {
                    normal: 'app/assets/img/sporty_black.png',
                    toggle: 'app/assets/img/sporty_white.png'
                }
            },
            { name: 'sporty',
                style: {},
                imgSrc: 'app/assets/img/sporty_black.png',
                images: {
                    normal: 'app/assets/img/sporty_black.png',
                    toggle: 'app/assets/img/sporty_white.png'
                }
            },
            { name: 'insensitive',
                style: {},
                imgSrc: 'app/assets/img/sporty_black.png',
                images: {
                    normal: 'app/assets/img/sporty_black.png',
                    toggle: 'app/assets/img/sporty_white.png'
                }
            },
            { name: 'insistent',
                style: {},
                imgSrc: 'app/assets/img/sporty_black.png',
                images: {
                    normal: 'app/assets/img/sporty_black.png',
                    toggle: 'app/assets/img/sporty_white.png'
                }
            },
            { name: 'confident',
                style: {},
                imgSrc: 'app/assets/img/sporty_black.png',
                images: {
                    normal: 'app/assets/img/sporty_black.png',
                    toggle: 'app/assets/img/sporty_white.png'
                }
            },
            { name: 'honest',
                style: {},
                imgSrc: 'app/assets/img/sporty_black.png',
                images: {
                    normal: 'app/assets/img/sporty_black.png',
                    toggle: 'app/assets/img/sporty_white.png'
                }
            },
            { name: 'clever',
                style: {},
                imgSrc: 'app/assets/img/sporty_black.png',
                images: {
                    normal: 'app/assets/img/sporty_black.png',
                    toggle: 'app/assets/img/sporty_white.png'
                }
            },
            { name: 'creative',
                style: {},
                imgSrc: 'app/assets/img/sporty_black.png',
                images: {
                    normal: 'app/assets/img/sporty_black.png',
                    toggle: 'app/assets/img/sporty_white.png'
                }
            },
            { name: 'optimistic',
                style: {},
                imgSrc: 'app/assets/img/sporty_black.png',
                images: {
                    normal: 'app/assets/img/sporty_black.png',
                    toggle: 'app/assets/img/sporty_white.png'
                }
            },
            { name: 'reliable',
                style: {},
                imgSrc: 'app/assets/img/sporty_black.png',
                images: {
                    normal: 'app/assets/img/sporty_black.png',
                    toggle: 'app/assets/img/sporty_white.png'
                }
            },
            { name: 'keen',
                style: {},
                imgSrc: 'app/assets/img/sporty_black.png',
                images: {
                    normal: 'app/assets/img/sporty_black.png',
                    toggle: 'app/assets/img/sporty_white.png'
                }
            },
            { name: 'have empathy',
                style: {},
                imgSrc: 'app/assets/img/sporty_black.png',
                images: {
                    normal: 'app/assets/img/sporty_black.png',
                    toggle: 'app/assets/img/sporty_white.png'
                }
            }
        ];
        deferred.resolve(categories);
        return deferred.promise;
    }
}
