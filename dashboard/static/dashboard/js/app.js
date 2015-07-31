angular
  	.module('dashApp', ['ui.router'])

	.constant('BASE_URL', 'http://localhost:8000/api/products/')

	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider)
	{
	    $urlRouterProvider.otherwise('/');

	    $stateProvider
	      .state('dashboard', {
	        url: '/dashboard',
	        templateUrl: '/templates/index.html',
	        controller: 'dashCtrl'
	      })
	   //    .state('product', {
	   //      url: '/products/{id}',
	   //      templateUrl: '/static/partials/product.html',
	   //    })
	   //    .state('about', {
	   //    	url:'/about',
	   //    	templateUrl: '/static/partials/about.html'
	   //    })
	   //    .state('blog', {
	   //    	url:'/blog',
	   //    	templateUrl: '/static/partials/blog.html'
	   //    })
	   //   .state('contact', {
	   //    	url:'/contact',
	   //    	templateUrl: '/static/partials/contact.html'
	   //    })
	   //    .state('register', {
	   //    	url:'/register',
	   //    	templateUrl: '/static/partials/login.html'
	   //    })
	   //    .state('login', {
	   //    	url:'/login',
	   //    	templateUrl: '/static/partials/login.html'
	   //    })
	   //    .state('delivery', {
	   //    	url:'/delivery',
	   //    	templateUrl: '/static/partials/terms-conditions.html'
	   //    })
	   //    .state('terms', {
	   //    	url:'/terms',
	   //    	templateUrl: '/static/partials/terms-conditions.html'
	   //    })
	   //    .state('privacy', {
	   //    	url:'/privacy',
	   //    	templateUrl: '/static/partials/privacy.html'
	   //    })
		  // .state('faq', {
	   //    	url:'/faq',
	   //    	templateUrl: '/static/partials/faq.html'
	   //    })
	   //    .state('car', {
	   //    	url: '/cart',
	   //    	templateUrl: '/static/partials/cart.html'
	   //    })
	 }])

		// .state('addProduct', {
		// 	url: "/add",
		// 	templateUrl: 'static/templates/add_product.html',
		// 	controller: 'MainCtrl'
		// });