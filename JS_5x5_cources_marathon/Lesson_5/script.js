const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const counterTime = document.querySelector('#time');
const board = document.querySelector('#board');


let time = 0;
let scoreGame = 0;


startBtn.addEventListener('click', (event) => {
	event.preventDefault();
	screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
	if(event.target.classList.contains('time-btn')) {

		const timeData = parseInt(event.target.getAttribute('data-time'));
		if(timeData < 10) {
			time = `0${timeData}`;
		} else {
			time = timeData;
		}
		screens[1].classList.add('up');
		startGame();
	}
});

board.addEventListener('click', (event) => {
	if(event.target.classList.contains('circle')) {
		scoreGame++;
		event.target.remove();
		createCircle();
	}
});

// // debug
// startGame();
function startGame() {
	counterTime.innerHTML = `00:${time}`;

	board.innerHTML = '<h2>Приготовится!!!</h2>';
	setTimeout(() => {
		board.innerHTML = "";
		handlerTime(time);
		createCircle();
		let timerId = setInterval(timeTimer, 1000);

		setTimeout(() => {
			clearInterval(timerId);
		}, (parseInt(time) + 1) * 1000);
	}, 3000);
}


function timeTimer() {
	if(time === 0) {
		finishGame();
	} else {
		let count = --time;
		if(count < 10) {
			count = `0${count}`;
		}
		handlerTime(count);
	}
}


function handlerTime(value) {
	counterTime.innerHTML = `00:${value}`;
}

function createCircle() {
	const {width, height} = board.getBoundingClientRect();
	const sizeCircle = getRandomNumber(15, 60);
	const x = getRandomNumber(0, width - sizeCircle);
	const y = getRandomNumber(0, height - sizeCircle);

	const circle = document.createElement('div');
	circle.classList.add('circle');
	circle.style.width = `${sizeCircle}px`;
	circle.style.height = `${sizeCircle}px`;
	circle.style.top = `${y}px`;
	circle.style.left = `${x}px`;
	board.append(circle);

	setColor(circle);
}

function getRandomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function setColor(element) {
	element.style.backgroundColor = `rgb(${getRandomNumber(10, 230)},${getRandomNumber(90, 200)},${getRandomNumber(30, 210)})`;
}


function finishGame() {
	screens[2].children[0].classList.add('hide');
	screens[2].children[1].classList.add('hide');

	board.innerHTML = `<div>
							<h2>Игра окончена</h2>
							<h3>Ваш счёт: <span class="primary">${scoreGame}</span></h3>
						</div>`;

	setTimeout(() => {
		board.innerHTML = "";
		board.innerHTML = `<div class="board-btn">
								<button id = 'restart'>Начать играть заново</button>
								<button id = 'exit'>Выйти из игры</button>
							</div>`;

		document.querySelector('#restart').onclick = restartGame;
		document.querySelector('#exit').onclick = exitGame;
	}, 3000);
}


function restartGame() {
	screens[1].classList.remove('up');
	setTimeout(() => {
		screens[2].children[0].classList.remove('hide');
		screens[2].children[1].classList.remove('hide');
		scoreGame = 0;
	}, 0)
}

function exitGame() {
	screens[0].classList.remove('up');
	screens[1].classList.remove('up');
	setTimeout(() => {
		screens[2].children[0].classList.remove('hide');
		screens[2].children[1].classList.remove('hide');
		scoreGame = 0;
	}, 0)
}
