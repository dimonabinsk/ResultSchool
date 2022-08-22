const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
// const getTodosByIds = (ids) => {
// 	const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
// 	console.log(requests)
// 	// console.log(Promise.all(requests))
// 	Promise.all(requests)
// 		.then((responses) => {
// 			console.log(responses)
// 			const dataResults = responses.map((data) => data.json());
// 			return Promise.all(dataResults);
// 		})
// 		.then((allTasks) => {
// 			console.log(allTasks);
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// };
// getTodosByIds([43, 21, 55, 100, 10]);


const getTodosByIds = async(ids) => {
	try {
		const requests = await ids.map((id) => {
			return fetch(`${TODOS_URL}/${id}`);
		});
		const promiseAll = (await Promise.all(requests)).map((response) => {
			if(!response.ok) return console.error("Ошибка в получении задач")
			return response.json();
		})
		const allTasks = await Promise.all(promiseAll);
		console.log(allTasks)
	} catch(e) {
		console.error(e);
	}

}


const result = getTodosByIds([43, 21, 55, 100, 10]);


