/**
	app.js 应用的入口
*/
'use strict'

var myApp = angular.module('myApp', ['ui.router','myApp.controller']);
myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/console');
    $stateProvider
    .state('console',{
    	url: '/console',
    	views: {
    		'' : {
    			templateUrl: 'tpl/duty/duty.html',
                // controller: ''
    		},
    		'leftmenu@console' : {
    			templateUrl: 'tpl/leftnav.html'
    		},
    		'console@console' : {
    			templateUrl : 'tpl/duty/console.html'
    		},
    		'consoleleft@console' : {
    			templateUrl : 'tpl/duty/consoleleft.html',
                controller: "consoleleftCtrl"
    		}
    	}
    })
    .state('home',{
        url: '/home',
        template: '<h2>,World</h2>'
    })
}]);
// myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
//     $urlRouterProvider.otherwise('/');
//     $stateProvider.state('index',{
//         url: '/',
//         template: '<h1>hello</h1>'
//     })
//     
//     
//     
//     
    
// }])