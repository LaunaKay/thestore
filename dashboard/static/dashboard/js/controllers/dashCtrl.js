angular
    .module('dashApp')
    .controller('dashCtrl', function($scope, ProductsService, $state)
        {
            console.log('inside dashctrl')
            $scope.newProduct = {};

            $scope.addProduct = function()
            {
                ProductsService.addOne($scope.newProduct)
                    .then(function(res)
                    {
                        // redirect to homepage once added
                        $state.go('home');
                    });
            };

            $scope.deleteProduct = function(id)
            {
                Products.delete(id);
                // update the list in ui
                $scope.products = $scope.products.filter(function(product)
                {
                    return product.id !== id;
                })
            };

            ProductsService.all().then(function(res)
            {
                console.log('inside all products', res.data)
                $scope.products = res.data;
            });
        });