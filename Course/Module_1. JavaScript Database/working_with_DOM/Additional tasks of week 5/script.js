

class CustomSelect {
	textContent;
	#options;
	#id;
	#rootDiv;
	#dropdownBtn;
	#dropdownText;
	#dropdownIcon;
	#dropdownList;
	#dropdownListItem;

	constructor(id = "1", options = []) {
		this.#id = id;
		this.#options = options;
		this.#rootDiv = document.createElement("div");
		this.#dropdownBtn = document.createElement("button");
		this.#dropdownText = document.createElement("span");
		this.#dropdownIcon = document.createElement("i");
		this.#dropdownList = document.createElement("ul");
		this.#dropdownListItem = null;

	}


	#openingSwitch() {
		const selectList = document.querySelector(".select-dropdown__list");
		const btnArrow = document.querySelector(".select-dropdown__icon");
		selectList.classList.toggle("active");
		btnArrow.classList.toggle("active");
	}

	#selectingAnItem() {
		const btnText = document.querySelector(".select-dropdown__text");
		btnText.textContent = this.textContent;
	}

	#createSelectList() {

		this.#rootDiv.className = `select-dropdown select-dropdown--${this.#id}`;
		this.#rootDiv.onclick = this.#openingSwitch;

		this.#dropdownBtn.className = `select-dropdown__button select-dropdown__button--${this.#id}`;

		this.#dropdownText.className = `select-dropdown__text select-dropdown__text--${this.#id}`;
		this.#dropdownText.textContent = "Выберите элемент";

		this.#dropdownIcon.className = "fa-solid fa-angle-down select-dropdown__icon";

		this.#dropdownList.className = `select-dropdown__list select-dropdown__list--${this.#id}`;

		this.#dropdownListItem = this.#options.map(element => {
			const selectListItem = document.createElement("li");
			selectListItem.className = "select-dropdown__list-item";
			selectListItem.dataset.value = `${element.value}`;
			selectListItem.textContent = element.text;
			selectListItem.onclick = this.#selectingAnItem;
			return selectListItem;
		});

		this.#dropdownList.append(...this.#dropdownListItem);
		this.#dropdownBtn.append(this.#dropdownText, this.#dropdownIcon);
		this.#rootDiv.append(this.#dropdownBtn, this.#dropdownList);
		return this.#rootDiv;
	}


	render(container) {
	container.append(this.#createSelectList());
	}
}

const options = [
	{ value: 1, text: "JavaScript" },
	{ value: 2, text: "NodeJS" },
	{ value: 3, text: "ReactJS" },
	{ value: 4, text: "HTML" },
	{ value: 5, text: "CSS" }
];


const customSelect = new CustomSelect("123", options);
const mainContainer = document.querySelector("#container");
customSelect.render(mainContainer);

// const selectDiv = document.querySelector(".select-dropdown");

// selectDiv.addEventListener("click", evt => {
// 	const {target} = evt;
// 	const list = document.querySelector(".select-dropdown__list");
// 	const btn = document.querySelector(".select-dropdown__button");
// 	const btnText = document.querySelector(".select-dropdown__text");
// 	const btnArrow = document.querySelector(".select-dropdown__icon");
//
// 	if(target === btn || target === btnText || target === btnArrow) {
// 		list.classList.toggle("active");
// 		btnArrow.classList.toggle("active");
// 	}
// })