const peopleWithVisa = [
	{
		firstName: "Stasia",
		lastName: "Ward",
		criminalRecord: true,
		passportExpiration: "19.06.2040"
	},
	{
		firstName: "Elliot",
		lastName: "Baker",
		criminalRecord: false,
		passportExpiration: "04.06.2041"
	},
	{
		firstName: "Leighann",
		lastName: "Scott",
		criminalRecord: true,
		passportExpiration: "31.07.2039"
	},
	{
		firstName: "Nick",
		lastName: "Pop",
		criminalRecord: false,
		passportExpiration: "31.12.2010"
	}
];

/*Функция allowVisa() должна возвращать отфильтрованный массив people,
 чтобы он удовлетворял следующим условиям:

 1. Текущая дата должна быть меньше свойства passportExpiration.
 2. У клиента не должно быть судимости, т.е. значение свойства criminalRecord должно равняться false.
 */


const allowVisa = (people = []) => {
	if(!people.length) {
		console.log("Массив не должен быть пустым !!!");
		return;
	}
	const newDate = new Date().getTime();
	const newPeople = people.map(element => {
		const criminal = element.criminalRecord;
		let datePassport = element.passportExpiration;
		datePassport = datePassport.split(".").reverse();
		--datePassport[1];
		datePassport = new Date(datePassport.toString()).getTime();
		if(!criminal && datePassport > newDate) return element;
	}).filter(element => element);
	return newPeople;
};

const result = allowVisa(peopleWithVisa);
console.log("result", result);