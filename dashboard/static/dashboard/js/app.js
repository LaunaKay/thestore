angular
  	.module('dashApp', ['ui.router'])

	.constant('BASE_URL', 'http://launakay.pythonanywhere.com/api/products/')

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
	      .state('flot', {
	      	url:'/flot',
	      	templateUrl: '/static/dashboard/partials/flot.html'
	      })
	      .state('morris', {
	      	url:'/morris',
	      	templateUrl: '/static/dashboard/partials/morris.html'
	      })
		  .state('tables', {
	      	url:'/tables',
	      	templateUrl: '/static/dashboard/partials/tables.html'
	      })
	      .state('forms', {
	      	url: '/forms',
	      	templateUrl: '/static/dashboard/partials/forms.html'
	      })
	      .state('panels', {
	      	url: '/panels',
	      	templateUrl: '/static/dashboard/partials/panels-wells.html'
	      })
	      .state('buttons', {
	      	url: '/forms',
	      	templateUrl: '/static/dashboard/partials/buttons.html'
	      })
	 }])

		// .state('addProduct', {
		// 	url: "/add",
		// 	templateUrl: 'static/templates/add_product.html',
		// 	controller: 'MainCtrl'
		// });