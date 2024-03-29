/**
	app.js 应用的入口
*/
'use strict'

var myApp = angular.module('myApp', ['ui.router','myApp.controllers','myApp.directives']);
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
    		// 'leftmenu@console' : {
    		// 	templateUrl: 'tpl/leftnav.html'
    		// },
    		'console@console' : {
    			templateUrl : 'tpl/duty/console.html'
    		},
    		'dutyboardleft@console' : {
    			// templateUrl : 'tpl/duty/dutyboardleft.html',
                template: '<dutyboardleft></dutyboardleft>',
                controller: "consoleleftCtrl"
    		},
            'dutyboardright@console' : {
                // templateUrl : 'tpl/duty/dutyboardright.html'
                template: '<dutyboardright></dutyboardright>'
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