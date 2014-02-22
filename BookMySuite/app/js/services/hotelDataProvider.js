bookMySuite.factory('hotelDataProvider', function()
{
	return {
		hotels : [{
			name : 'Radisson',
			location: 'Noida',
			rating: 10,
			dailyRate: 300,
			image: 'img/radisson.jpg'
		},
		{
			name: 'Park Plaza',
			location: 'Sector 52',
			image: 'img/taj.jpg',
			dailyRate: 450,
			rating: 6
		},
		{
			name: 'Hilton',
			location: 'Janakpuri',
			image: 'img/ashok.jpg',
			dailyRate: 700,
			rating: 4
		},
		{
			name: "Country Inn",
			location: "Dubai",
			image: "img/countryinn.jpg",
			dailyRate: 1000,
			rating: 3
		},
		{
			name: "Royal Orchid",
			location: "Bangalore",
			rating: 2,
			dailyRate: 200,
			image: "img/royalorchid.jpg",
		},
		{

			name : "Lalit  Ashok",
			location : "Delhi",
			rating: 5,
			dailyRate: 4000,
			image: "img/ashok.jpg",
		}
		]
	};
});
