angular.module('storeApp')
    .service('ProductsService', function($http, BASE_URL){
    var Products = {};

    Products.all = function(){
        console.log('inside factory, all products')
        return $http.get(BASE_URL);
    };

    Products.getProduct = function(id) {
        console.log('inside factory, one product')
        return $http.get(BASE_URL + id)
    }

    Products.update = function(updatedProduct){
        return $http.put(BASE_URL + updatedProduct.id, updatedProduct);
    };

    Products.delete = function(id){
        return $http.delete(BASE_URL + id + '/');
    };

    Products.addOne = function(newProduct){
        return $http.post(BASE_URL, newProduct)
    };

    return Products;
});