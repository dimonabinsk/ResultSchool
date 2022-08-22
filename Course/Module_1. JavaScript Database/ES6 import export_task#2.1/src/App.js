import { KEY } from './constants';

export default class App {

	constructor (block) {
		this.element = document.querySelector(block);
		if(this.element) {

		}
		if (localStorage.getItem(KEY) !== "true") {
			this.buttonCookie = this.element.querySelector('.cookie-consent__button');
			const storageDisk = this.checkLocalStorage.bind(this);
			this.buttonCookie?.addEventListener('click',storageDisk )
		} else {
			this.element.classList.add('hide');
		}

	}

	checkLocalStorage() {
		localStorage.setItem(KEY, 'true');
		this.element.classList.add('hide');
		this.buttonCookie.removeEventListener('click',this.checkLocalStorage.bind(this));
	}

}

// export default class App {
//
// 	constructor (block) {
// 		this.element = document.querySelector(block);
// 	}
//
// 	checkLocalStorage() {
//
// 		if(localStorage.getItem(KEY) === "true") {
// 			this.element.classList.add('hide');
// 		} else if (this.element) {
// 			const buttonCookie = this.element.querySelector('.cookie-consent__button');
// 			buttonCookie.addEventListener("click", () => {
// 				localStorage.setItem(KEY, 'true');
// 				this.element.classList.add('hide');
// 			})
// 		}
//
// 	}
//
// }