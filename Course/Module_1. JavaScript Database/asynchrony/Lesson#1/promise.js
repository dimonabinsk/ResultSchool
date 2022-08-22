
const developer = {
	name: "Dmitriy",
	status: false
}

const promise = new Promise((resolve, reject) => {
	if(developer.status) {
		setTimeout(() => {
			resolve(`${developer.name} является JS разработчиком`);
		}, 2000);
	} else {
		reject(`${developer.name} НЕ является JS разработчиком`);
	}
});

console.log(promise);

promise
	.then((message) => {
		console.log("message", message);
	})
	.catch((error) => {
		console.log("error", error);
	})

const URL_TODOS = " https://jsonplaceholder.typicode.com/todos";

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


const createTodoElement = (text) => {
	const todoLi = document.createElement("li");
	const todoAnchor = document.createElement("a");
	todoAnchor.setAttribute("href", "#");
	todoAnchor.textContent = text;
	todoLi.append(todoAnchor);
	return todoLi;
}

const getAllTodos = () => {
	toggleLoader();
	const result = fetch(URL_TODOS)
	result
		.then((response) => {
			if(!response.ok) throw new Error("Ошибка запроса");
			return response.json()
		})
		.then((todos) => {
			console.log(todos)
			todos.forEach(todo => {
				const todoHtml = createTodoElement(todo.title);
				dataContainer.append(todoHtml);
			})
		})
		.catch((error) => {
			console.log("error", error);
		})
		.finally(() => {
			toggleLoader();
		})
}

getAllTodos();

