/**
Сейчас тебе необходимо создать функцию startGame(), которая будет принимать в себя 2 параметра:

 1. heroPlayer - объект игрока, который содержит свойства name - имя героя;
	 health - шкала здоровья,которая изначально равна 100;
	 heatEnemy() - функция, которая принимает в себя объект enemy и
	 отнимает у объекта enemy 10 единиц здоровья (ключ health).

 2. enemyPlayer - объект врага, который содержит свойства name - имя героя;
	 health - шкала здоровья, которая изначально равна 100;
	 heatHero() - функция, которая принимает в себя объект hero и
	 отнимает у объекта hero 10 единиц здоровья (ключ health).


 Внутри функции startGame() тебе необходимо случайным образом генерировать число от 0 до 1.
 Если выпадает 0, то нужно вызвать метод heatEnemy() у объекта heroPlayer, если 1 - то heatHero() у enemyPlayer.


 Для того, чтобы функция генерировала несколько раз случайные значения, и игроки дрались,
 	пока у кого-то не закончатся жизни, рекомендуется использовать цикл while,
 	который будет выполнятся, пока у любого игрока свойство health не станет меньше либо равно нулю.
 После выполнения цикла необходимо определить, какой игрок выиграл,
 	и вывести сообщение через alert(), где name и health - значения свойств победившего игрока.
 */

const hero = {
	name:"Batman",
	health:100
};
const enemy = {
	name:"Joker",
	health:100
};


function getRandomNumberInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame(heroPlayer, enemyPlayer) {
	const heroPlayerName = heroPlayer.name;
	const enemyPlayerName = enemyPlayer.name;
	let heroPlayerHealth = heroPlayer.health;
	let enemyPlayerHealth = enemyPlayer.health;

	let startInterval = setInterval(() => {
		if(getRandomNumberInRange(0, 1) === 0) {
			heroPlayerHealth = heroPlayerHealth - 10;
			console.log(`Удар от ${enemyPlayerName}a, -10 здоровья у ${heroPlayerName}a`);
		} else {
			enemyPlayerHealth = enemyPlayerHealth - 10;
			console.log(`Удар от ${heroPlayerName}a, -10 здоровья у ${enemyPlayerName}a`);
		}
		if(heroPlayerHealth <= 0) {
			clearInterval(startInterval);
			alert(`${enemyPlayerName} победил! У него осталось ${enemyPlayerHealth} здоровья`);
		}
		if(enemyPlayerHealth <= 0) {
			clearInterval(startInterval);
			alert(`${heroPlayerName} победил! У него осталось ${heroPlayerHealth} здоровья`);
		}
	}, 1000);
}

startGame(hero, enemy);