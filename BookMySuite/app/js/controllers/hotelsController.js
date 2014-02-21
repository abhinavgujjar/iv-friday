bookMySuite.controller('hotelsController', function($scope){
	$scope.message = "Yay!! Weekend";

	$scope.allowRegister = true;

	$scope.hotels = [{
		name : 'Radisson',
		location: 'Noida',
		rating: 10,
		image: 'img/radisson.jpg'
	},
	{
		name: 'Park Plaza',
		location: 'Sector 52',
		image: 'img/taj.jpg',
		rating: 6
	},
	{
		name: 'Hilton',
		location: 'Janakpuri',
		image: 'img/ashok.jpg',
		rating: 4
	},
	{
		name: "Country Inn",
		location: "Dubai",
		image: "img/countryinn.jpg",
		rating: 3
	},
	{
		name: "Royal Orchid",
		location: "Bangalore",
		rating: 2,
		image: "img/royalorchid.jpg",
	},
	{

		name : "Lalit  Ashok",
		location : "Delhi",
		rating: 5,
		image: "img/ashok.jpg",
	}
	];

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