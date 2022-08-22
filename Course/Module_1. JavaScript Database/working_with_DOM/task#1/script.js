// way 1

// elementBody.innerHTML = `
// 	<form class="create-user-form">
// 		  <label>
// 			Имя
// 			<input type="text" name="userName" placeholder="Введите ваше имя" />
// 		  </label>
// 		  <label>
// 			Пароль
// 			<input type="password" name="password" placeholder="Придумайте пароль" />
// 		  </label>
// 		  <button type="submit">
// 			Подтвердить
// 		  </button>
// 	</form>
// `;


// way 2

// body get element
const elementBody = document.querySelector('body');

//  creating the form element
const createForm = document.createElement("form");
createForm.className = "create-user-form"

//  creating the label element
const createLabelName = document.createElement("label");
createLabelName.textContent = "Имя";

const createLabelPassword = document.createElement("label");
createLabelPassword.textContent = "Пароль";

//  creating the input element
const createInputText = document.createElement("input");
createInputText.setAttribute("type", "text");
createInputText.setAttribute("name", "userName");
createInputText.setAttribute("placeholder", "Введите ваше имя");

const createInputPassword = document.createElement("input");
createInputPassword.setAttribute("type", "password");
createInputPassword.setAttribute("name", "password");
createInputPassword.setAttribute("placeholder", "Придумайте пароль");

// creating the button element
const createBtn = document.createElement("button");
createBtn.setAttribute("type", "submit");
createBtn.textContent = "Подтвердить";
createBtn.style.cursor = "pointer";


// the body adds all the elements
createLabelName.append(createInputText);
createLabelPassword.append(createInputPassword);
createForm.append(createLabelName,createLabelPassword);
createForm.append(createBtn);
elementBody.append(createForm);







