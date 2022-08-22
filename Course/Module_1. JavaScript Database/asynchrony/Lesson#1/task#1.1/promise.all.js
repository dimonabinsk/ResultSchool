
const URL_USERS = "https://jsonplaceholder.typicode.com/users";

const dataContainer = document.querySelector("#data-container");

const toggleLoader = () => {
	const loader = document.querySelector("#loader");
	const isHiddenLoader = loader.hasAttribute("hidden");
	if(isHiddenLoader) {
		loader.removeAttribute("hidden");
	} else {
		loader.setAttribute("hidden", "");
	}
}


const createUserElement = (text) => {
	const userLi = document.createElement("li");
	const userAnchor = document.createElement("a");
	userAnchor.setAttribute("href", "#");
	userAnchor.textContent = text;
	userLi.append(userAnchor);
	return userLi;
}

const getAllUser = () => {
	toggleLoader();
	const result = fetch(URL_USERS);
	result
		.then((response) => {
			if(!response.ok) throw new Error("Ошибка запроса");
			return response.json()
		})
		.then((users) => {
			users.forEach(user => {
				const userHtml = createUserElement(user.name);
				dataContainer.append(userHtml);
			})
		})
		.catch(error => console.log("error", error))
		.finally(() => toggleLoader())
}

getAllUser();