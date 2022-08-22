import '../styles/styles.css';
const $ = document.querySelector.bind(document);
const cookieElement = $(".cookie-consent");
const cookiesBtn = $(".cookie-consent__button");
const localStorage = window.localStorage;

if(localStorage.getItem("statusCookie")) {
	cookieElement.classList.add("hide")
} else {
	cookiesBtn.addEventListener("click", () => {
		localStorage.setItem("statusCookie", "true");
		cookieElement.classList.add("hide");
	})
}
