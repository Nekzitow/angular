(function(){
	var app = angular.module('store',[]);
	/*creamos un controlador*/
	app.controller('StoreController',function(){
		this.products = gem2;
		this.product = gem;
	});

	app.controller('PanelController', function() {
		this.tab = 1;
		this.selectTab = function (setTab) {
			this.tab = setTab;
		};
		this.isSelected = function (checkTab) {
			return this.tab === checkTab;
		};
	});
	/*Arreglo*/
	var gem2 = [
		{
			name : 'Dodecahedron',
			price : 2.95,
			description : ' . . . ',
			canPurchase: true,
			soldOut: false,
			images: {
				full:'img/gem-01.gif'
			}
		},
		{
			name : 'Pentagonal Gem',
			price : 5.95,
			description : ' . . . ',
			canPurchase: true,
			soldOut: false,
			images: {
				full:'img/gem-02.gif'
			}
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
