class ProductServices {
	constructor(products = []) {
		this.product = products
	}


	filterBy(search = "") {
		if(!search.trim()) return this.product;
		return this.product.filter(product => {
			return product.title.toLowerCase().includes(search.toLowerCase());
		})
	}

	getById(id) {
		return this.product.find(product => product.id === id )
	}
}

