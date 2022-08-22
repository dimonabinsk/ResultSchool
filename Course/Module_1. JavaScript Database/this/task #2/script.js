// Задание #2

const dog = {
	name: "Чарли",
	type: "Собака",
	makeSound() {
		return "Гав-Гав";
	}
};

const bird = {
	name: "Петя",
	type: "Воробей",
	makeSound() {
		return "Чик-чирик";
	}
};

function makeDomestic(isDomestic) {
	switch(isDomestic) {
		case false:
			console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
			return {...this,isDomestic: isDomestic};
		case true:
			console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
			return {...this, isDomestic: isDomestic};
		default:
			console.log("Второй передаваемый аргумент должен быть true или false");
	}
}

const result = makeDomestic.bind(dog, true)();
// вернет объект: {name: 'Чарли', type: 'Собака', isDomestic: true, makeSound: ƒ}
// Выведет сообщение: "Собака по имени Чарли говорит Гав-Гав"

const result1 = makeDomestic.call(bird, false);
const result2 = makeDomestic.apply(bird, [false]);
// вернет объект: {name: 'Петя', type: 'Воробей', isDomestic: false, makeSound: ƒ}
// Выведет сообщение: "Воробей по имени Петя говорит Чик-чирик"


console.log(result);
console.log(result1);
console.log(result2);