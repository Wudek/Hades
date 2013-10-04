/*global io:false, angular:false */
"use strict";
/* Controllers */
function AppCtrl($scope, $http)
{
	$http({method : 'GET', url : '/api/test'}).success(function (data, status, headers, config)
	{
		$scope.data = data;
	}).error(function (data, status, headers, config)
		{
			$scope.data = 'Error: ' + data;
		});
}
function HomeController()
{
}
HomeController.$inject = [];
function MapController()
{
}
MapController.$inject = [];
function MyCtrl1()
{
}
MyCtrl1.$inject = [];
function MyCtrl2()
{
}
MyCtrl2.$inject = [];
