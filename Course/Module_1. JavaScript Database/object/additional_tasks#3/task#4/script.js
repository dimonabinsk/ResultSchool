const todaysWinner = {
	prize:"10 000$"
};

const winnerApplicants = {
	"001":{
		name:"Максим",
		age:25
	},
	"201":{
		name:"Светлана",
		age:20
	},
	"304":{
		name:"Екатерина",
		age:35
	}
};

const name = document.querySelector(".name > i");
const age = document.querySelector(".age > i");
const prize = document.querySelector(".prize > i");
const score = document.querySelector(".score > i");
const button = document.querySelector("button");

button.addEventListener("click", () => {
	getWinner(winnerApplicants, todaysWinner);
});

function writeDownTheWinner(object, num) {
	name.textContent = `${object.name}`;
	age.textContent = `${object.age}`;
	prize.textContent = `${object.prize}`;
	score.textContent = `${num}`;
}


function getWinner(applicants, winnerObject) {
	name.textContent = "";
	age.textContent = "";
	prize.textContent = "";
	score.textContent = "";
	const play = setInterval(() => {
		const randomNumber = getRandomNumberInRange(1, 305);
		console.log(randomNumber)
		for(const applicantsKey in applicants) {
			if(randomNumber === +applicantsKey) {
				clearInterval(play);
				console.log("resultWinner", {...winnerObject, ...applicants[applicantsKey]});
				writeDownTheWinner({...winnerObject, ...applicants[applicantsKey]}, randomNumber);
				return {...winnerObject, ...applicants[applicantsKey]};
			}
		}
	}, 10);

}

function getRandomNumberInRange(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}