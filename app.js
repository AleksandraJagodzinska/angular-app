(function(){

	var app = angular.module('gemStore',[]);

	app.controller('StoreController', function(){
		this.product = gems;
	});
	var gems = [
	{
		name: "Dodeca",
		price: 2.95,
		description: "Loremipsum",
		canPurchase: true,
	},
	{
		name: "Modeca",
		price: 7.95,
		description: "Loremipsum",
		canPurchase: falsethis,
	}
	]
})
