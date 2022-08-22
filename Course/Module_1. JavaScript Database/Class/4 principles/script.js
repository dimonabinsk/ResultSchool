// Принципы ООП. Наследование

class Plane {
	 constructor(type, numberOfPassengers) {
		 this.type = type;
		 this.numberOfPassengers = numberOfPassengers;
	 }

	 startFlight() {
		 console.log("Полетели!");
	 }
}

const plane = new Plane("Пассажирский", 100);
console.log(plane);
plane.startFlight();

class MilitaryPlane extends Plane {
	constructor(type) {
		super(type, 0);
		this.numberOfGuns = 0;
	}

	startFlight() {
		console.log("Полетели в атаку!");
	}

	setNumberOfGuns(numberOfGuns) {
		this.numberOfGuns = numberOfGuns;
	}

	shoot() {
		console.log("Стреляем!");
	}
}

const militaryPlane = new MilitaryPlane("Военный");
console.log(militaryPlane);
militaryPlane.startFlight();
militaryPlane.setNumberOfGuns(4);
militaryPlane.shoot();


// instanceof
class Dog {}

console.log(militaryPlane instanceof MilitaryPlane); // true
console.log(militaryPlane instanceof Plane); // true
console.log(militaryPlane instanceof Dog); // false

// Принципы ООП. Инкапсуляция


// public
// private #

class Developer {
	#salary;
	constructor(name, programmingLanguage) {
		this.name = name;
		this.programmingLanguage = programmingLanguage;
		this.#salary = 3000;
	}
	startCoding() {
		console.log(`Зарплата: ${this.#salary}`);
		console.log(`${this.name} начинает писать код`);
	}

	get devSalary() {
		return this.#salary;
	}

	set setSalary(salary) {
		this.#salary = salary;
	}
	printProgrammingLanguage() {
		console.log(`Язык программирования ${this.programmingLanguage}`);
	}
}



const developer = new Developer("Дмитрий", "JavaScript");
console.log(developer);
console.log(developer.name);
console.log(developer.programmingLanguage);
developer.startCoding();
developer.printProgrammingLanguage();
// private #
// Private field '#salary' must be declared in an enclosing class
// Частное поле '#salary' должно быть объявлено во включающем классе
// console.log(developer.#salary); // Uncaught SyntaxError

// get
console.log(developer.devSalary);
// set
developer.setSalary = 5000;
// get
console.log(developer.devSalary);

class JuniorDeveloper extends Developer{
	constructor(name, programmingLanguage) {
		super(name, programmingLanguage);
	}
}

const juniorDeveloper = new JuniorDeveloper("Максим", "JavaScript");
juniorDeveloper.startCoding();
juniorDeveloper.printProgrammingLanguage();

// Полиморфизм (одно действие, несколько реализаций)

class Animal {
	constructor(name) {
		this.name = name;
	}
	makeSound() {}
}

class Cat extends Animal {
	constructor(name) {
		super(name);
	}
	// Полиморфизм
	makeSound() {
		console.log("Мяу-мяу");
	}
}

class Horse extends Animal {
	constructor(name) {
		super(name);
	}
	// Полиморфизм
	makeSound() {
		console.log("Иго-го-го");
	}
}

// Абстракция

class Footballer {
	constructor(name, club) {
		this.name = name;
		this.club = club;
	}
	shoot() {}
	celebrateGoal() {}
	pass() {}

}

class Forward extends Footballer {
	constructor(name, club) {
		super(name, club);
	}

	shoot() {
		console.log("Очень сильный удар!");
	}
	celebrateGoal() {
		console.log("Д-а-а-а! Я забил гол!");
	}
	pass() {
		console.log("Средненький пас")
	}
}

// Static

class Car {
	static isCar(car) {
		// this нельзя использовать
		return car instanceof Car;
	}
	static #initialParams = {
		name: "BMW",
		maxSpeed: 200,
	}
	constructor(name, maxSpeed) {
		this.name = name || Car.#initialParams.name;
		this.maxSpeed = maxSpeed || Car.#initialParams.maxSpeed;
	}

	drive() {
		console.log(
			`Машина ${this.name} сейчас в пути со скоростью ${this.maxSpeed}`
		);
	}
}

const car = new Car();
car.drive();

console.log(car);
const isCar = Car.isCar(car); // true

console.log(isCar);

