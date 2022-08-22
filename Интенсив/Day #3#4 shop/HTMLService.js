function eclipse(string = "") {
	if(string.length > 50) {
		return string.substring(0, 50) + "...";
	}
	return string;
}

class HTMLService {
	paintProduct(product) {
		const title = product.title;
		return `
			<li data-id ="${product.id}">
				<img src="${product.image}" title="${title}" alt="${title}">
				<small>${eclipse(title)}</small>
				<small><strong data-id ="${product.id}">$ ${product.price}</strong></small>
			</li>
		`;
	}

	paintProducts(products) {
		return products.map(this.paintProduct).join("");
	}

	paintCartItems(item) {
		return `
			<li data-type="remove" data-id="${item.id}">
				(${item.amount})
				${item.title}
				<strong>$ ${item.price}</strong>
			</li>
		`
	}

	paintCart({items, totalPrice}) {
		if(items.length === 0) {
			return `<p> Корзина пуста </p>`;
		}
		return `
			<ul class="cart-list">
				${items.map(this.paintCartItems).join("")}
			</ul>
			<hr/>
			<p class="info">
			<span>Общая цена: <strong>$ ${totalPrice.toFixed(2)}</strong></span>
			<button class="clear" data-type="clear">Очистить</button>
			</p>
		`
	}

	paintError(e) {
		return `<p class="error">${e}</p>`;
	}
}