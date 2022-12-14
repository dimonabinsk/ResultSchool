/*
*В JavaScript объект даты может принимать в себя timestamp,
* 	т.е. количество миллисекунд с 1 января 1970 года 00:00:00 по UTC.
* 	По данному количеству миллисекунд генерируется объект даты.
* 	Благодаря этому, чтобы добавить определенное число миллисекунд,
* 	можно использовать следующую запись: new Date(Date.now() + 5000),
* 	где 5000 - это миллисекунды. В итоге мы получим дату,
* 	которая на 5000 миллисекунд больше текущей.

 *	Используя эти знания, тебе необходимо создать функцию addDays(),
		которая будет добавлять переданное количество дней к переданной дате.

 * 	Она принимает в себя 2 параметра:

 1. date - экземпляр класса Date
 2. days - количество дней, тип данных number
 * 	Тебе необходимо к параметру date прибавить определенное количество дней,
	  которое передается в параметр days. Функция addDays() должна возвращать обновленную дату.

 *  Подсказка: не забывай, что timestamp, который передается в Date(),
		должен измеряться в миллисекундах.

* */

// Если честно, не совсем понял задание, написал что понял

const date = {
  year: 2022,
  month: 5,
  day: 1,
};

const newDate = new Date(date.year, date.month - 1, date.day);
console.log("before", newDate);
console.log("after", addDays(newDate, 10));

function addDays(date, days) {
  return new Date(date.getTime() + convertDaysToMs(days));
}

function convertDaysToMs(days) {
  return days * 24 * 60 * 60 * 1000;
}

function humanReadableTime(second) {
  const hours = Math.floor((second % 360) + second / 360);
  console.log("h", hours);
  const minutes = Math.floor((second % 60) + second / 60);
  console.log("m", minutes);
  const seconds = Math.floor(second / 360);
  console.log("s", seconds);
}

humanReadableTime(3601);
