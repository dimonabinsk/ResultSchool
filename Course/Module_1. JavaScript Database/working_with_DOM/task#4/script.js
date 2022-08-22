const tasks = [
	{
		id:"1138465078061",
		completed:false,
		text:"Посмотреть новый урок по JavaScript"
	},
	{
		id:"1138465078062",
		completed:false,
		text:"Выполнить тест после урока"
	},
	{
		id:"1138465078063",
		completed:false,
		text:"Выполнить ДЗ после урока"
	}
];

const taskList = document.querySelector(".tasks-list");
const formTaskBlock = document.querySelector(".create-task-block");
const inputCheckbox = document.querySelector(".create-task-block__input");

document.body.append(createModalWindow());
const modal = document.querySelector(".modal-overlay");
let flag = true;
// вешаем события на элементы DOM
formTaskBlock.addEventListener("submit", addHandlerToForm);
inputCheckbox.addEventListener("input", addHandlerToInput);
taskList.addEventListener("click", addHandlerModal);
document.addEventListener("mouseover", addHandlerMouseOver);
document.addEventListener("mouseout", addHandlerMouseOut);
document.addEventListener("keydown", (event) => {
	const {key} = event;
	if(key === "Tab") {
		event.preventDefault();
		flag = !flag;
		addToggleTheme(flag);
	}
})

// добавляем задачи из task
tasks.forEach(task => taskList.append(createTaskItem(task.id, task.text, flag)));

// добавляем новую задачу из формы ввода
function addHandlerToForm(event) {
	event.preventDefault();
	const {target} = event;
	const taskName = target.taskName;
	const newId = Date.now();
	const nodeListOfTask = document.querySelectorAll(".task-item__text");

	if(nodeListOfTask.length === 0 && taskName.value !== "") {
		deleteError();
		taskList.append(createTaskItem(newId, taskName.value, flag));
		taskName.value = "";
		createError(formTaskBlock, "Название задачи не должно быть пустым");
	}

	if(nodeListOfTask.length > 0) {
		if(taskName.value !== "") {
			const taskNameArr = [];
			nodeListOfTask.forEach((elem) => {
				taskNameArr.push(elem.textContent.trim().toLowerCase());
			});
			if(taskNameArr.includes(taskName.value.toLowerCase().trim())) {
				if(!document.querySelector(".error-message-block")) {
					createError(formTaskBlock, "Задача с таким названием уже существует");
				}
			} else {
				deleteError();
				taskList.append(createTaskItem(newId, taskName.value, flag));
				taskName.value = "";
				createError(formTaskBlock, "Название задачи не должно быть пустым");

			}
		} else if(taskName.value === "") {
			deleteError();
			createError(formTaskBlock, "Название задачи не должно быть пустым");
		}
	}
}

// обработка пустой формы ввода
function addHandlerToInput(event) {
	const {target} = event;
	const {value} = target;
	if(!value && value.includes("")) {
		createError(formTaskBlock, "Название задачи не должно быть пустым");
	} else if(value === " ") {
		target.value = "";
	} else {
		deleteError();
	}
}

// создаём новую задачу из формы ввода /html/
function createTaskItem(id, value, flag) {
	let color = "#ffffff";
	let styleBtn = "1px solid #ffffff";
	if(flag) {
		color = "initial";
		styleBtn = "none";
	}

	const rootDiv = document.createElement("div");
	rootDiv.className = "task-item";
	rootDiv.dataset.taskId = id;
	rootDiv.style.color = color;

	const divContainer = document.createElement("div");
	divContainer.className = "task-item__main-container";

	const divContent = document.createElement("div");
	divContent.className = "task-item__main-content";

	const checkboxForm = document.createElement("form");
	checkboxForm.className = "checkbox-form";

	const checkboxInput = document.createElement("input");
	checkboxInput.className = "checkbox-form__checkbox";
	checkboxInput.type = "checkbox";
	checkboxInput.id = id;

	const checkboxLabel = document.createElement("label");
	checkboxLabel.className = "checkbox-form__label";
	checkboxLabel.htmlFor = id;

	const spanText = document.createElement("span");
	spanText.className = "task-item__text";
	spanText.textContent = value;

	const deleteBtn = document.createElement("button");
	deleteBtn.className = "task-item__delete-button default-button delete-button";
	deleteBtn.dataset.deleteTaskId = id;
	deleteBtn.style.border = styleBtn;
	deleteBtn.textContent = "Удалить";

	checkboxForm.prepend(checkboxInput, checkboxLabel);
	divContent.prepend(checkboxForm, spanText);
	divContainer.prepend(divContent, deleteBtn);
	rootDiv.prepend(divContainer);

	return rootDiv;
}

// создаём ошибку
function createError(tag, message) {
	const createError = document.createElement("span");
	createError.classList.add("error-message-block");
	createError.textContent = message;
	tag.append(createError);
}

// удаляем ошибку
function deleteError() {
	if(document.querySelector(".error-message-block")) {
		document.querySelector(".error-message-block").remove();
	}
}

// создаём модальное окно
function createModalWindow() {
	const rootDiv = document.createElement("div");
	rootDiv.className = "modal-overlay modal-overlay_hidden";

	const containerDiv = document.createElement("div");
	containerDiv.className = "delete-modal";

	const header = document.createElement("h3");
	header.className = "delete-modal__question";
	header.textContent = "Вы действительно хотите удалить эту задачу?";

	const btnContainer = document.createElement("div");
	btnContainer.className = "delete-modal__buttons";

	const btnCancel = document.createElement("button");
	btnCancel.className = "delete-modal__button delete-modal__cancel-button";
	btnCancel.textContent = "Отмена";

	const btnDelete = document.createElement("button");
	btnDelete.className = "delete-modal__button delete-modal__confirm-button";
	btnDelete.textContent = "Удалить";

	btnContainer.prepend(btnCancel, btnDelete);
	containerDiv.prepend(header, btnContainer);
	rootDiv.prepend(containerDiv);

	return rootDiv;
}

// data-delete-task-id /id-ник кнопки "удалить" в созданной задаче/
let dataId = null;

// вывести модальное окно
function addHandlerModal(event) {
	const {target} = event;
	if(target.getAttributeNames()[1] === "data-delete-task-id") {
		dataId = target.getAttribute("data-delete-task-id");
		modal.classList.remove("modal-overlay_hidden");
		modal.addEventListener("click", deleteHandlerModal);
	}
}

// удалить задачу и закрыть модальное окно или просто закрыть модальное окно
function deleteHandlerModal(event) {
	const {target} = event;
	if(target === document.querySelector(".delete-modal__confirm-button")) {
		modal.classList.add("modal-overlay_hidden");
		document.querySelector(`[data-task-id = "${dataId}"]`).remove()
	} else if(target === document.querySelector(".delete-modal__cancel-button")) {
		modal.classList.add("modal-overlay_hidden");
	}
}

// создаём окно подсказку / tooltip /
function createTooltip(tag, text) {
	const tooltip = document.createElement("span");
	tooltip.className = "tooltip";
	tooltip.innerText = `Вы хотите удалить задачу:`;
	const textTask = document.createElement("span");
	textTask.textContent = `"${text}"?`

	tooltip.append(textTask);

	tag.append(tooltip);

}

// обрабатываем событие "mouseover" выводим подсказку "tooltip"
function addHandlerMouseOver(event) {
	const {target} = event;
	const isMouseOverDeleteBtn = target.className.includes("task-item__delete-button");
	if(isMouseOverDeleteBtn) {
		const text = target
			.closest(".task-item")
			.querySelector("span")
			.textContent;
		if(text) createTooltip(target, text);
	}
}

// обрабатываем событие "mouseout" удаляем подсказку "tooltip"
function addHandlerMouseOut(event) {
	const {target} = event;
	const isMouseOverDeleteBtn = target.className.includes("task-item__delete-button");
	if(isMouseOverDeleteBtn) {
		target.closest(".task-item").querySelector(".tooltip").remove();
	}
}

// переключение темная и светлая тема
function addToggleTheme(flag) {
	const taskItemAll = document.querySelectorAll(".task-item");
	const buttonAll = document.querySelectorAll("button");
	if(flag) {
		document.body.style.background = "initial";
		if(taskItemAll) {
			taskItemAll.forEach((element) => {
				element.style.color = "initial";
			})
		}

		buttonAll.forEach((btn) => {
			btn.style.border = "1px solid transparent";
		})
	} else {
		document.body.style.background = "#24292E";
		if(taskItemAll) {
			taskItemAll.forEach(element => {
				element.style.color = "#ffffff";
			})
		}

		buttonAll.forEach((btn) => {
			btn.style.border = "1px solid #ffffff";
		})

	}

}