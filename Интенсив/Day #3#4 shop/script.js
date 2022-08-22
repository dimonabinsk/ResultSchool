
const URL_PRODUCT = "https://fakestoreapi.com/products";
let productServices;
const productCart = new ProductCart();
const htmlService = new HTMLService();
const productsContainer = document.getElementById("products");
const filterInput = document.getElementById("filter");
const cartContainer = document.getElementById("cart-container");

function renderProducts(products) {
	productsContainer.innerHTML =  htmlService.paintProducts(products);
}
function renderCart() {
	cartContainer.innerHTML = htmlService.paintCart(
		productCart.info()
	)
}

filterInput.addEventListener("input", event => {
	const target = event.target;
	const value = target.value;
	console.log(value)
	const filterProducts = productServices.filterBy(value);
	renderProducts(filterProducts)
})

productsContainer.addEventListener("click", event => {
	const target = event.target;
	const id = target.dataset.id
		?
		target.dataset.id
		:
		target.closest("li")?.dataset.id;
	if(id) {
		productCart.add(
			productServices.getById(+id)
		)
		renderCart()
	}
})

cartContainer.addEventListener("click", event => {
	const type = event.target?.dataset.type;
	const id = event.target?.dataset.id;
	switch(type) {
		case "clear":
			productCart.clear();
			renderCart();
			break;
		case "remove":
			productCart.remove(id)
			renderCart();
			break;
	}
})

async function startApplication() {
	renderCart()
	try {
		const response = await fetch(URL_PRODUCT);
		const data = await response.json();
		productServices = new ProductServices(data);

		renderProducts(productServices.product);	
	} catch(e) {
		productsContainer.innerHTML = htmlService.paintError("Ошибка в получении данных...")
	}

}

startApplication();



