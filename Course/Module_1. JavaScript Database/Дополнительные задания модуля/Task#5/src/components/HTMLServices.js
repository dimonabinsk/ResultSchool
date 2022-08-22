export class HTMLServices {
	#donateItem;

	constructor() {
		this.#donateItem = document.createElement("div");
		this.#donateItem.className = "donate-item";

	}

	render(date, donates) {
		const donate = document.createElement("b");
		donate.innerHTML = `${donates} &#8381;`;
		this.#donateItem.textContent = `${date} : `;
		this.#donateItem.append(donate);
		return this.#donateItem;
	}


}