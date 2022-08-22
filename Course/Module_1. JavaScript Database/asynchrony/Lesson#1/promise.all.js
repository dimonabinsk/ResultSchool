
const URL_TODOS = " https://jsonplaceholder.typicode.com/todos";

const dataContainer = document.querySelector("#data-container");
const idsTodos = [20, 15, 34, 45, 165];

const toggleLoader = () => {
	const loader = document.querySelector("#loader");
	const isHiddenLoader = loader.hasAttribute("hidden");
	if(isHiddenLoader) {
		loader.removeAttribute("hidden");
	} else {
		loader.setAttribute("hidden", "");
	}
}


const createTodoElement = (text) => {
	const todoLi = document.createElement("li");
	const todoAnchor = document.createElement("a");
	todoAnchor.setAttribute("href", "#");
	todoAnchor.textContent = text;
	todoLi.append(todoAnchor);
	return todoLi;
}

const getTodosById = (ids) => {
	toggleLoader();
	const requests = ids.map(id => fetch(`${URL_TODOS}/${id}`));
	console.log("requests",requests);
	Promise.all(requests)
		.then((responses) => {
			const dataResults = responses.map(response => response.json());
			console.log("dataResults",dataResults);
			return Promise.all(dataResults);
		})
		.then((todos) => {
			todos.forEach(todo => {
				const todoHTML = createTodoElement(todo.title);
				dataContainer.append(todoHTML);
			})
		})
		.catch(error => console.error(error))
		.finally(() => toggleLoader())

};
getTodosById(idsTodos)