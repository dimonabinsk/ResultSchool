import {getTodayDateFormat} from "../core/utility/date";
import {DonatesServices} from "./DonatesServices";
import {HTMLServices} from "./HTMLServices";

export default class App {

	constructor() {
		this.totalAmount = document.getElementById('total-amount');
		this.containerDonate = document.querySelector(".donates-container__donates");
		this.formBtn = document.querySelector(".donate-form__submit-button");
		this.form = document.querySelector(".donate-form__donate-input");

	}

	run() {
		this.totalAmount.innerHTML = "0 &#8381;";
		this.formBtn.addEventListener("click", (e) => {
			e.preventDefault();
			const valueDonate = +this.form.value;
			if(valueDonate) {
				const id = Date.now();
				const donatObject = new DonatesServices();
				const dateFormat = new getTodayDateFormat().runDateFormat();
				const donateHTML = new HTMLServices();

				this.containerDonate.append(donateHTML.render(dateFormat, valueDonate));
				donatObject.addDonateObject(id, dateFormat, valueDonate);
				const arrDonate = donatObject.run();
				// console.log(arrDonate)
				const totalDonate = arrDonate.reduce(function(acc, curr, i, arr) {
					curr = arr[i].donate;
					return acc + curr;
				}, 0)
				this.totalAmount.innerHTML = `${totalDonate} &#8381;`;
			}

		})

	}
}