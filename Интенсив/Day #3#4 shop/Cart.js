class ProductCart {
	cart = {};

	add(product) {
		const key = product.id;
		if(this.cart[key]) {
			this.cart[product.id].amount++;
			return;
		}
		this.cart[key] = {
			title:product.title,
			price:product.price,
			amount:1
		};
		return this.cart;
	}

	remove(productId) {
		const amount = this.cart[productId].amount;
		console.log(amount)
		if(amount <= 1) {
			delete this.cart[productId];
		} else {
			this.cart[productId].amount--;
		}

	}

	clear() {
		this.cart = {};
	}

	info() {
		const items = Object.keys(this.cart).map(id => {
			return {id, ...this.cart[id]}
		})
		const totalPrice = items.reduce((acc, item) => {
			return acc + item.price * item.amount;
		}, 0);
		return {items, totalPrice};
	}

}