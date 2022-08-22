
const usersArray = [
	{ id: "34rdca3eeb7f6fgeed471198", name: "Andrew", age: 25 },
	{ id: "76rdca3eeb7f6fgeed471100", name: "Alexey", age: 15 },
	{ id: "12rdca3eeb7f6fgeed4711012", name: "Egor", age: 13 },
	{ id: "32rdca3eeb7f6fgeed471101", name: "Kate", age: 31 },
	{ id: "98rdca3eeb7f6fgeed471102", name: "Elena", age: 18 }
];

const usersObject = {
	"34rdca3eeb7f6fgeed471198": {
		id: "34rdca3eeb7f6fgeed471198",
		name: "Andrew",
		age: 25
	},
	"76rdca3eeb7f6fgeed471100": {
		id: "76rdca3eeb7f6fgeed471100",
		name: "Alexey",
		age: 15
	},
	"12rdca3eeb7f6fgeed4711012": {
		id: "12rdca3eeb7f6fgeed4711012",
		name: "Egor",
		age: 13
	},
	"32rdca3eeb7f6fgeed471101": {
		id: "32rdca3eeb7f6fgeed471101",
		name: "Kate",
		age: 31
	},
	"98rdca3eeb7f6fgeed471102": {
		id: "98rdca3eeb7f6fgeed471102",
		name: "Elena",
		age: 18
	}
};

const userArr = [];
const userObject = {};

/*
Тебе  необходимо написать универсальную функцию getAdultUsers(), которая будет:

 Принимать на вход массив или объект с пользователями

 Выбирать из него только те элементы, у которых поле age больше или равно 18

 Возвращать массив или объект со взрослыми пользователями.
 	Если изначально был передан массив, то вернуть необходимо также массив.
 	Если объект, то объект.

 Примечание: в работе рекомендуем использовать Object.keys()
 */

console.log(getAdultUsers(usersArray));
console.log(getAdultUsers(usersObject));
console.log("Test",getAdultUsers(userArr));
console.log("Test",getAdultUsers(userObject));

function checkForValidityArray(array) {
	let check;
	if(Array.isArray(array) && array.length > 0) {
		array.forEach(user => {
			if(Object.keys(user).length > 0) {
				check = true;
			}
		})
	} else {
		check = false;
	}
	return check;
}


function checkForValidityObject(object) {
	return typeof object === "object" && Object.keys(object).length > 0;
}

function getAdultUsers(users){
		if( checkForValidityArray(users)) {
		const newUsersArray = [];
		users.forEach((user) => {
			if(user.age >= 18) {
				newUsersArray.push(user);
			}
		});
		return newUsersArray;

	} else if(checkForValidityObject(users)) {
		let newUsersObject = {};
         const sortArray = Object.keys(users).filter(key => users[key].age >= 18);
			for(const usersKey in users) {
				if(sortArray.includes(usersKey)) {
					newUsersObject[usersKey] = users[usersKey];
				}
			}
		return newUsersObject;
	} else {
		return new Error("Упс! Тут ничего нет или пустое").toString();
	}
}


