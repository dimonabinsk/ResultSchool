const URL_ALBUMS = "https://jsonplaceholder.typicode.com/albums";

const loadBtn = document.querySelector(".button-loading");
const list = document.querySelector(".list");
const loadWrap = document.querySelector(".load-wrap");

console.log(list.children)


const renderAlbums = async() => {
	loadWrap.classList.add("active");
	try {
		const requests = await fetch(URL_ALBUMS);
		if(!requests.ok) console.error("Ответ сервера не в диапазоне 200-299");
		const albumList = await requests.json();
		addAlbums(albumList);

	} catch(e) {
		throw new Error("Ошибка в получении данных")
	} finally {
		loadWrap.classList.remove("active");
	}
}

function addAlbums(albums) {
	if(list.children.length > 0) {
		while (list.firstChild) {
			list.firstChild.remove()
		}
	}
	albums.forEach(item => {
		const li = document.createElement("li");
		const todoAnchor = document.createElement("a");
		todoAnchor.setAttribute("href", "#");
		todoAnchor.textContent = `${item.title}`;
		li.append(todoAnchor);
		list.append(li);
	})
}


loadBtn.onclick = renderAlbums;