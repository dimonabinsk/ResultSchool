// Task #1

/*
 * В объекте attacker тебе необходимо создать 3 функции:

 1.checkChancesToWin() - проверяет шансы атакующего замка захватить защищающийся замок.
 * 	Данная функция принимает в себя 1 параметр defenderObject,
 * 	который является объектом защищающегося замка - defender.
 * 	Она должна сверять количество всех боевых единиц у обоих замков.
 * 	Например, если у атакующего замка значение свойства archer больше,
 * 	чем у защищающегося, то к шансам захвата необходимо прибавить 1
 * 	(изначально значение шансов должно быть равно нулю).
 * 	Функция должна возвращать массив, в котором 1-й элемент -
 *	 - это шансы атакующего замка на захват,
 * 	а 2-й - это значение максимального шанса на захват (количество ключей в объекте defenderObject).
 * 	То есть, если у атакующего замка значения свойств archer и cavalry больше,
 * 	чем у защищающегося, а другие значения свойств - меньше,
 * 	то шансы на захват должны быть [2, 4] (образно шансы равны 2 из 4 либо 50%).
 *
 *
 2.improveArmy() - прибавляет к каждому числовому значению объекта attacker по 5 единиц
 * 	(обновляет свойства archer, footSoldier, cavalry, artillery).
 * 	Данная функция не принимает никаких параметров.
 *
 *
 3.attack() - принимает в себя 1 параметр - это объект защищающегося замка defender.
 * 	Сначала эта функция проверяет, если шансы на захват (вызываем функцию checkChancesToWin()) меньше,
 * 	чем 70% от максимальных шансов, то необходимо усилиться (вызвать функцию improveArmy()) и
 * 	вывести сообщение через alert() “Наши шансы равны ourArmyChances/maximumChances}.
 * 	Необходимо укрепление!” (ourArmyChances - шансы атакующего замка на захват,
 * 	maximumChances - максимальный шанс на захват).
 * 	Иначе же требуется вывести сообщение в модальном окне:
 * 	“Мы усилились! Мы несомненно победим! Наши шансы высоки!”.
 * */

const attacker = {
	archer:30,
	footSoldier:55,
	cavalry:10,
	artillery:3,
	checkChancesToWin(defenderObject) {
		let ourArmyChances = 0;
		const maximumChances = Object.keys(defenderObject).length;
		for(const defenderObjectKey in defenderObject) {
			if(this[defenderObjectKey] > defenderObject[defenderObjectKey]) {
				ourArmyChances++;
			}
		}
		return [ourArmyChances, maximumChances];
	},
	improveArmy() {
		for(const [key, value] of Object.entries(this)) {
			if(!isNaN(value)) {
				this[key] = value + 5;
			}

		}
	},
	attack(defenderObject) {
		const [
			ourArmyChances,
			maximumChances
		] = this.checkChancesToWin(defenderObject);
		if(((ourArmyChances / maximumChances) * 100) > 70) {
			alert("Мы усилились! Мы несомненно победим! Наши шансы высоки!");
		} else {
			alert(`Наши шансы равны ${ourArmyChances}/${maximumChances}`);
			this.improveArmy();
		}
	}
};

const defender = {
	archer:33,
	footSoldier:50,
	cavalry:40,
	artillery:10
};

// Пример результата работы функции attack():

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!
