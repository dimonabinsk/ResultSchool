import {getRandomColor} from "../core/utilities/getRandomColor";


export class ButtonHTML {
	#body;
	constructor() {
		this.button = document.createElement("button");
		this.button.className = "button";
		this.button.textContent = "Изменить цвет страницы";
		this.#body = document.body;
	}
	listener() {
		this.button.addEventListener("click", () => {
			this.#body.style.backgroundColor = getRandomColor();
		});
		return this.button;
	}

}

