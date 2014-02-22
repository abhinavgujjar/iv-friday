bookMySuite.controller('foreignhotelsController', function($scope, hotelDataProvider){
	$scope.message = "Yay!! Weekend";

	$scope.allowRegister = true;

	$scope.upVote = function(hotel){
		hotel.rating++;
	}

	$scope.downVote = function(hotel){
		hotel.rating--;
	}

	$scope.hotels = [{
		"id": 1,
		"name" : "Marriott",
		"location" : "Hawaii",
		"rating": 50,
		"image": "http://i.imgur.com/Z5R6hBU.jpg",
		"dailYrate": 6000
	}]
	;


	$scope.yell = function(input)
	{
		if (input)
		{
			alert (input);
		}
		else
		{
			alert($scope.message);
		}
	}

});