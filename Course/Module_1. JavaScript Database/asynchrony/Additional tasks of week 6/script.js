const URL_POST = "https://jsonplaceholder.typicode.com/posts/";
const URL_COMMENTS = "https://jsonplaceholder.typicode.com/comments?postId=";
const container = document.querySelector("#container");


const toggleLoader = () => {
	const loader = document.querySelector("#loader");
	const isHiddenLoader = loader.hasAttribute("hidden");
	if(isHiddenLoader) {
		loader.removeAttribute("hidden");
	} else {
		loader.setAttribute("hidden", "");
	}
};

async function renderPost(id) {
	try {
		toggleLoader();
		const requestsPost = await fetch(`${URL_POST}${id}`);
		if(!requestsPost.ok) return new Error("Error");
		const requestComments = await fetch(`${URL_COMMENTS}${id}`);
		if(!requestComments.ok) return new Error("Error");
		const resPost = await requestsPost.json();
		const postHTML = createPost(resPost.title, resPost.body);
		container.append(postHTML);
		const resComments = await requestComments.json();
		resComments.forEach(comment => {
			const text = comment.body;
			const author = comment.email;
			const commentHTML = createCommentsList(text, author);
			container.append(commentHTML);
		})
		return [resPost, resComments];
	} catch(e) {
		console.error(e);
	} finally {
		toggleLoader();
	}
}

renderPost(1).then(r => console.log(...r));


function createPost(title, description) {
	const rootDiv = document.createElement("div");
	rootDiv.className = "post";
	rootDiv.setAttribute("id", "post");

	const titlePost = document.createElement("span");
	titlePost.className = "post__title";
	titlePost.textContent = title;

	const descriptionPost = document.createElement("p");
	descriptionPost.className = "post__text";
	descriptionPost.textContent = description;

	const commentPostTitle = document.createElement("b");
	commentPostTitle.className = "post__comments-text";
	commentPostTitle.textContent = "Comments:";

	rootDiv.append(titlePost, descriptionPost, commentPostTitle);

	return rootDiv;
}

function createCommentsList(text, author) {
	const rootList = document.createElement("ol");
	rootList.className = "post__comments";

	const commentItem = document.createElement("li");
	commentItem.className = "post-comment";

	const commentAuthor = document.createElement("span");
	commentAuthor.className = "post-comment__author";
	commentAuthor.textContent = author;

	const comment = document.createElement("p");
	comment.className = "post-comment__text";
	comment.textContent = text;

	commentItem.append(commentAuthor, comment);
	rootList.append(commentItem);

	return rootList;
}