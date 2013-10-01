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
function MapController()
{
	function initialize() {
		var mapOptions = {
			center: new google.maps.LatLng(-34.397, 150.644),
			disableDefaultUI: true,
			zoom: 4,
			mapTypeId: google.maps.MapTypeId.TERRAIN
		};
		var map = new google.maps.Map(document.getElementById("map-canvas"),
			mapOptions);
	}
	initialize();
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
