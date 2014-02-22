'use strict';


var bookMySuite = angular.module('bookMySuite', ['ngRoute'])
.config(
	function ($routeProvider) {
		$routeProvider.when('/newHotel',
		{
			templateUrl:'partials/newHotel.html',
			controller: 'newHotelController'
		});
		$routeProvider.when('/hotels',
		{
			templateUrl: 'partials/hotels.html',
			controller: 'hotelsController'
		});
		$routeProvider.when('/foriegnhotels',
		{
			templateUrl: 'partials/hotels.html',
			controller: 'foreignhotelsController'
		});
	}
	);