const URL_USERS_PHOTO = "https://jsonplaceholder.typicode.com/photos";

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

const createUserPhotoElement = (url, title) => {
	const userLi = document.createElement("li");
	userLi.className = "photo-item";

	const userPhoto = document.createElement("img");
	userPhoto.setAttribute("src", url);
	userPhoto.setAttribute("alt", title);

	const userPhotoTitle = document.createElement("h3");
	userPhotoTitle.className = "photo-item__title";
	userPhotoTitle.textContent = title;

	userLi.append(userPhoto, userPhotoTitle);
	return userLi;
}

const getFastestLoadedPhoto = (ids) => {
	toggleLoader();
	const requests = ids.map(id => fetch(`${URL_USERS_PHOTO}/${id}`));
	const promises = Promise.race(requests);
	promises
		.then(response => {
			if(!response.ok) throw new Error("Ошибка в получении данных");
			return response.json();
		})
		.then(result => {
			const photoUrl = result.url;
			const photoTitle = result.title;
			const userHtml = createUserPhotoElement(photoUrl, photoTitle);
			dataContainer.append(userHtml);
		})
		.catch(error => console.error("error", error))
		.finally(() => toggleLoader());
}

getFastestLoadedPhoto([60, 12, 55]);