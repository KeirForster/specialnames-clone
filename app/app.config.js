angular
    .module('app')
    .config(config);

config.$inject = ['$locationProvider', '$routeProvider'];

function config($locationProvider, $routeProvider)
{
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/',
        {
            template:'<home-title></home-title>' +
                    '<gender-cards></gender-cards>'
        })
        .when('/:gender/categories',
        {
            template: '<category-title></category-title>' +
                    '<name-categories></name-categories>'
        })
        .when('/:gender/categories/submit',
        {
            template: '<name-list-title></name-list-title>' +
                    '<name-list></name-list>'
        })
        .otherwise('/');
}
