(function(){
	var app = angular.module('store',[]);
	/*creamos un controlador*/
	app.controller('StoreController',function(){
		this.products = gem2;
		this.product = gem;
	});
	/*Arreglo*/
	var gem2 = [
		{
			name : 'Dodecahedron',
			price : 2.95,
			description : ' . . . ',
			canPurchase: true,
			soldOut: false,
		},
		{
			name : 'Pentagonal Gem',
			price : 5.95,
			description : ' . . . ',
			canPurchase: true,
			soldOut: false,

		}
	];
	/*Arreglo simple*/
	var gem = {
			name : 'Dodecahedron',
			price : 2.95,
			description : ' . . . ',
			canPurchase: true,
			soldOut: false,
		};
})();
