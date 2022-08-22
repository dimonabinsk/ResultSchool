/*
 Функция getTotalPriceOfShoppingBag() должна возвращать общую
 стоимость всех товаров в корзине с учетом скидок и
 с учетом указанных клиентом количеством продуктов.
 Итоговое значение должно быть округлено до сотых.
 Это можно сделать с помощью toFixed()
 */

const groceries = {
	"Orange Juice":{
		price:149.99,
		discount:10
	},
	Chocolate:{
		price:89.99,
		discount:0
	}
	// ...
};

const shoppingBag = [
	{product:"Chocolate", quantity:2},
	{product:"Orange Juice", quantity:3}
];

function checkTheProductBasket(bag) {
	if(bag && bag !== false && Array.isArray(bag) && bag.length !== 0) {
		return true;
	} else {
		return console.error("Корзина пуста");
	}
}

function getTotalPriceOfShoppingBag(bag) {
	if(checkTheProductBasket(bag)) {
		let result = 0;
		bag.forEach((item) => {
			const good = item.product;
			const quantity = item.quantity;
			if(Object.keys(groceries).includes(good)) {
				const {price, discount} = groceries[good];
				result += (price - (price * discount / 100)) * quantity;
			} else {
				return console.log("Такого продукта нет в продаже");
			}
		})
		result = result.toFixed(2);
		console.log(`Итоговая цена: ${result} руб.`);
		return result;
	}
}

getTotalPriceOfShoppingBag(shoppingBag);
// const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
// console.log("totalPrice", totalPrice); // Возвращает 584.95
