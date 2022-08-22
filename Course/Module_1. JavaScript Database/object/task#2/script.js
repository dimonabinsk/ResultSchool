const ordersArr = [4, 2, 1, 3];
const people = [
	{id:1, name:"Максим"},
	{id:2, name:"Николай"},
	{id:3, name:"Ангелина"},
	{id:4, name:"Виталий"}
];


const result = giveTalonsInOrder(people, ordersArr);
console.log("result", result);

/* Возвращает массив
 [
 { id: 4, name: 'Виталий' },
 { id: 2, name: 'Николай' },
 { id: 1, name: 'Максим' },
 { id: 3, name: 'Ангелина' }
 ]
 */

// #1
function giveTalonsInOrder(peopleArray = [], ordersArray = []) {

	if(!peopleArray.length && !ordersArray.length) {
		return new Error("Упс!!! Массивы не должны быть пустыми");
	}
		let newPeople;
		newPeople = peopleArray.reduce((previousValue, currentValue) => {
			previousValue[currentValue.id] = currentValue;
			return previousValue;
		}, {});
		return ordersArray.map(num => newPeople[num]);

}

// #2

function getSorted(orders = [], peoples = []) {
	if (!orders.length && !peoples.length) {
		console.log("Массивы не должны быть пустыми");
		return;
	}
	const sortedPeople = [];
	orders.forEach((order) => {
		const findPeopleByOrder = peoples.find((people) => people.id === order);
		sortedPeople.push(findPeopleByOrder);
	});

	return sortedPeople;
}

console.log(getSorted(ordersArr, people));

// #3
// console.log("queue order", ordersArr);
// // console.log("initial value", people);
// // #2 чуть оптимизировать бы)
const result2 = giveTalonsInOrder2(people, ordersArr);
console.log("result", result2);

function giveTalonsInOrder2(patients, orders) {
	if (checkValidity(patients, orders)) {
		const peopleSort = patients.map((item) => item);
		sort(peopleSort, orders);
		return peopleSort;
	} else {
		return "Ошибка";
	}
}

function checkValidity(patients, orders) {
	return (
		patients.length === orders.length &&
		patients &&
		orders &&
		patients !== "" &&
		orders !== ""
	);
}

function sort(object, object2) {
	const length = object2.length;
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length - i; j++) {
			if (+object[i].id === +object2[j]) {
				const peopleSwap = object[i];
				object[i] = object[j];
				object[j] = peopleSwap;
			}
		}
	}
}