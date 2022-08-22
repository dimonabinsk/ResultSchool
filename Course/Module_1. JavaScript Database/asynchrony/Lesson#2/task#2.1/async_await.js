const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
let isLoading = false;


// const createNewPost = () => {
// 	isLoading = true;
// 	fetch(POSTS_URL, {
// 		method: "POST"
// 	})
// 		.then((response) => response.json())
// 		.then((result) => {
// 			console.log("result", result);
// 		})
// 		.catch((error) => {
// 			console.log("error", error);
// 		})
// 		.finally(() => {
// 			isLoading = false;
// 		});
// };


const createNewPost1 = async() => {
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
		return result;
	} catch(error) {
		console.log("error", error);
	} finally {
		isLoading = false;
	}
}

// createNewPost();
const res = createNewPost1();
res
	.then((message) => {
		console.log("message", message)
	})
	.catch((error) => {
		console.log("error", error);
	});