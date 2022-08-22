const taskList = document.querySelector(".tasks-list");
const formTaskBlock = document.querySelector(".create-task-block");

formTaskBlock.addEventListener("submit", (event) => {
	event.preventDefault();
	const {target} = event;
	const formValue = target.taskName;
	if(formValue.value !== "") {
		const newId = Date.now();
		// language=HTML
		taskList.innerHTML += `
     <div class="task-item" data-task-id=${newId}>
				<div class="task-item__main-container">
					<div class="task-item__main-content">
						<form class="checkbox-form">
							<input class="checkbox-form__checkbox" type="checkbox" id=${newId}>
							<label for=${newId}></label>
						</form>
						<span class="task-item__text">
							${formValue.value}
						</span>
					</div>
					<button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
						Удалить
					</button>
				</div>
		</div>
     `;
		formValue.value = "";
	}
});