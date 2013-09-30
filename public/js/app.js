/*global io:false, angular:false */
"use strict";
var socket = io.connect('http://localhost');
function test()
{
	socket.emit('my other event', { my : 'data' });
}
socket.on('news', function (data)
{
	console.log(data);
});
// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider)
{
	$routeProvider.when('/map', {templateUrl : 'partial/map', controller : MapController});
	$routeProvider.when('/view1', {templateUrl : 'partial/view1', controller : MyCtrl1});
	$routeProvider.when('/view2', {templateUrl : 'partial/view2', controller : MyCtrl2});
	$routeProvider.otherwise({redirectTo : '/map'});
	$locationProvider.html5Mode(true);
}]);