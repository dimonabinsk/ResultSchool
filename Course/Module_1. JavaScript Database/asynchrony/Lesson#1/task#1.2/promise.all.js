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

const getUsersByIds = (ids) => {
	toggleLoader();
	const requests = ids.map(id => fetch(`${URL_USERS}/${id}`));
	const promises = Promise.all(requests);
	promises
		.then(responses => {
			const data = responses.map(response => response.json());
			return Promise.all(data)
		})
		.then(result => {
			result.forEach(user => {
				const userHTML = createUserElement(user.name);
				dataContainer.append(userHTML);
			});

		})
		.catch(error => console.error("error", error))
		.finally(() => toggleLoader());
}

getUsersByIds([5, 6, 2, 1]);