const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";


const getTodosWithUserData = async() => {
	try {
		const response = await fetch(USERS_URL);
		if(!response.ok) throw new Error(
			"Ошибка в получении данных о пользователях"
		);
		const users = await response.json();
		console.log("users", users);
		const firstUserId = users[0]?.id;
		const todosResponse = await fetch(
			`${TODOS_URL}?userId=${firstUserId}`
		);
		if(!todosResponse.ok) throw new Error(
			"Ошибка в получении данных о задачах"
		);
		const todos = await todosResponse.json();
		console.log("todos", todos);

		// console.log("response",response);
	} catch(error) {
		console.log("error", error);
	} finally {
		console.log("finally");
	}

};

const promise = getTodosWithUserData();
console.log("promise", promise);


const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
let isLoading = false;

const createNewPost = async() => {
	isLoading = true;
	try {

		const response = await fetch(POSTS_URL, {
			method:"POST"
		});
		if(!response.ok) throw new Error(
			"Ошибка в получении данных"
		);
		const result = await response.json();
		console.log("result", result);
	} catch(error) {
		console.log("error", error);
	} finally {
		isLoading = false;
	}
}

createNewPost();