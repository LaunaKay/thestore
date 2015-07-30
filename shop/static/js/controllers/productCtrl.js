angular
    .module('storeApp')
    .controller('productCtrl', function($scope, ProductsService, $state, $stateParams)
    {
        console.log('inside productctrl')
        ProductsService.getProduct($stateParams.id).then(function(res)
            {
                console.log('inside single product', res.data)
                $scope.product = res.data;
            });

    })