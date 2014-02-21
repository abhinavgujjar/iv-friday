'use strict';

/* Filters */

bookMySuite.filter('toRupees', function(){
	return function(dollarRate){
		return dollarRate * 60;
	}
})
