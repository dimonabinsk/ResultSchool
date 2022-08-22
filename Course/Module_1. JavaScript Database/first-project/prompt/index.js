// prompt("Сколько будет 2 + 2?");
// alert("если ты ответил 4, то ты прав");
// prompt("Чему равен корень из 9?");
// alert("если ты ответил 3, то ты прав");
// prompt("Сколько будет 2 в 5-й степени?");
// alert("если ты ответил 32, то ты прав");

// const myName = "Dmitriy";
// const mySurname = "Maklakov";
// const myFavoriteAnimal = "dog";
// let myFavoriteDrink;
// let myFavoriteProgrammingLanguageAge;
//
// myFavoriteDrink = "Raspberry-strawberry-cherry";
// myFavoriteProgrammingLanguageAge = "JavaScript";
//
// console.log(myName);
// console.log(mySurname);
// console.log(myFavoriteAnimal);
// console.log(myFavoriteDrink);
// console.log(myFavoriteProgrammingLanguageAge);

// const carName = "BMW";
// let maxCarSpeed;
// let carOwner;
//
// maxCarSpeed = "200";
// carOwner = "Dmitriy";
// alert(carName);
// alert(maxCarSpeed);
// alert(carOwner);


// const question1 = "Какая самая маленькая страна мира по населению?";
// const question2 = "Какая самая большая страна мира по населению?";
// const question3 = "Какой самый большой материк на планете?";
//
// const answer1 = "Китай";
// const answer2 = "Евразия";
// const answer3 = "Ватикан";
//
// console.log(question1, "Ответ:", answer3);
// console.log(question2, "Ответ:", answer1);
// console.log(question3, "Ответ:", answer2);


// const myName = "Dmitriy";
// const myAge = 44;
// const  human = true;
// const myCar = null;
// const myHome = undefined;
// const bigIntNum = 100n;
// const myId = Symbol("#1234");
// const aboutMe = {
// 	myName: myName,
// 	age: myAge,
// 	human: human,
// 	car: myCar,
// 	home: myHome,
// 	id: myId,
// };
//
// console.log("My Name", myName, typeof myName);
// console.log("Age", myAge, typeof myAge);
// console.log( "I'm human ?", human, typeof human );
// console.log( "My Car", myCar, typeof myCar );
// console.log( "My Home", myHome, typeof myHome );
// console.log( "Big Number", bigIntNum, typeof bigIntNum );
// console.log( "About Me", aboutMe, typeof aboutMe );
// console.log( "My Id", myId, typeof myId );

// let text;
// let num;
// let count;
// text = "30";
// num = 33;
// count = true;
//
// text = 30;
// num = "33";
// count = null;
//
// alert(text);
// alert(num);
// alert(count);

// let ageOfPerson1 = 18;
// let ageOfPerson2 = "20";
//
// let nameOfAnimal1 = null;
// let nameOfAnimal2 = "Charlie";
//
// const bestProgrammingLanguage1 = "JavaScript";
// const bestProgrammingLanguage2 = "Java";
//
// let initialValue1;
// let initialValue2 = 0;
//
// let isJavaScriptProgrammer1 = true;
// let isJavaScriptProgrammer2 = false;
//
// let helloText1 = "Hello!";
// let helloText2 = "Привет!";
//
// ageOfPerson2 = ageOfPerson1;
// console.log( ageOfPerson2, typeof ageOfPerson2 );
//
// nameOfAnimal2 = nameOfAnimal1;
// console.log( nameOfAnimal2, typeof nameOfAnimal2 );
//
// console.log( "Переменную с const переопределить нельзя", bestProgrammingLanguage1, typeof bestProgrammingLanguage1 );
// console.log( "Переменную с const переопределить нельзя", bestProgrammingLanguage2, typeof bestProgrammingLanguage2 );
//
// initialValue2 = initialValue1;
// console.log( initialValue2, typeof initialValue2 );
//
// console.log( "var является устаревшим" );
// isJavaScriptProgrammer2 = isJavaScriptProgrammer1;
// console.log( isJavaScriptProgrammer2, typeof isJavaScriptProgrammer2 );
//
// helloText2 = helloText1;
// console.log( helloText2, typeof helloText2 );


// let myName = "Dmitriy";
// let myAge = 44;
// let  human = true;
// let myCar = null;
// let myHome = undefined;
// let bigIntNum = 100n;
// let myId = Symbol("#1234");
// let aboutMe = {
// 	myName: myName,
// 	age: myAge,
// 	human: human,
// 	car: myCar,
// 	home: myHome,
// 	id: myId,
// };
//
// console.log( Number( myName ), String( myName ), Boolean( myName ) );
// console.log( Number( myAge), String( myAge ), Boolean( myAge ) );
// console.log( Number( human), String( human ), Boolean( human ) );
// console.log( Number( myCar), String( myCar ), Boolean( myCar ) );
// console.log( Number( myHome), String( myHome ), Boolean( myHome ) );
// console.log( Number( bigIntNum), String( bigIntNum ), Boolean( bigIntNum ) );
// console.log( String( myId ), Boolean( myId ) );
// console.log( Number( aboutMe), String( aboutMe ), Boolean( aboutMe ) );

// function textAlert() {
// 	const userText = prompt("Введите текст").trim();
// 	const wordFromText = prompt("Введи слово из текста").trim();
// 	const indexOfWord = userText.indexOf(wordFromText);
//
// 	if ( indexOfWord > 0 ) {
// 		alert(`Результат: ${userText.slice(0, indexOfWord)}`);
// 	} else if ( indexOfWord < 0 ) {
// 		alert(`Результат: такого слова нет`);
// 	}else {
// 		alert(`Результат: вы ввели первое слово`);
// 	}
// }
//
// textAlert();


// // вопросы
// const question1 = "Сколько будет 2 + 2?";
// const question2 = "Сколько будет 2 * 2?";
// const question3 = "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько целых яблок у Пети осталось?";
// const question4 = "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в
// итоге целых конфет осталось у Маши?"; const question5 = "Сколько будет 2 + 2 * 2?";  // правильные ответы const
// answer1 = 4; const answer2 = 4; const answer3 = 1; const answer4 = 12; const answer5 = 6; // счетчик let counterTrue
// = 0; let counterFalse = 0;  function answerPrompt(question, answer) { let questionPrompt = prompt(question).trim();
// questionPrompt = Number(questionPrompt); if ( questionPrompt === answer  ) { counterTrue++; alert("Ответ верный"); }
// else { counterFalse++; alert("Ответ неверный");  } }  answerPrompt(question1, answer1); answerPrompt(question2,
// answer2); answerPrompt(question3, answer3); answerPrompt(question4, answer4); answerPrompt(question5, answer5);  //
// количество верных и неверных ответов alert(`Верных ответов: ${counterTrue}`); alert(`Неверных ответов:
// ${counterFalse}`);


// // вопросы
// const question1 = "JavaScript появился в 1995 году?";
// const question2 = "Спецификация JavaScript называется ECMAScript?";
// const question3 = "JavaScript был создан за 1 месяц";
//
// const answer1 = confirm( question1 );
// answer1 ? alert("Верно") : alert("Правильный ответ: 'JavaScript появился в 1995 году'");
// const answer2 = confirm( question2 );
// answer2 ? alert("Верно") : alert("Правильный ответ: 'Спецификация JavaScript называется ECMAScript'");
// const answer3 = confirm( question3 );
// !answer3 ? alert("Верно") : alert("Правильный ответ: 'JavaScript был создан за 10 дней'");

// for (let i = 0; i < 3; i += 1) {
// 	let newStudent = prompt("Введите имя нового студента!");
// 	if (newStudent) {
// 		newStudent = newStudent.trim();
// 		alert(`Добро пожаловать, ${newStudent}!`);
// 	}
// }

// let i = 0;
// while ( i < 3 ) {
// 	let newStudent = prompt("Введите имя нового студента!");
// 	if (newStudent) {
// 		newStudent = newStudent.trim();
// 		alert(`Добро пожаловать, ${newStudent}!`);
// 	}
// 	i++;
// }

// do {
// 	++i;
// 	let newStudent = prompt("Введите имя нового студента!");
// 	if (newStudent) {
// 		newStudent = newStudent.trim();
// 		alert(`Добро пожаловать, ${newStudent}!`);
// 	}
// } while ( i < 3 );

// const javaScriptDescription =
// 	"JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и
// функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый
// язык для программного доступа к объектам приложений.";   let newJavaScriptDescription = javaScriptDescription.slice(
// 0, Math.floor((javaScriptDescription.length - 1) / 2) ); newJavaScriptDescription =
// newJavaScriptDescription.replaceAll('а', 'А'); newJavaScriptDescription = newJavaScriptDescription.replaceAll('a',
// 'A'); newJavaScriptDescription = newJavaScriptDescription.replaceAll(' ', '').trim(); newJavaScriptDescription =
// newJavaScriptDescription + newJavaScriptDescription + newJavaScriptDescription; console.log(
// newJavaScriptDescription[Math.floor((newJavaScriptDescription.length - 1) / 2)] ); console.log(
// newJavaScriptDescription );

// let clientName = prompt( "Введите имя клиента" );
// clientName = clientName.trim();
//
// let clientSpentToday = prompt( "Сколько клиент потратил сегодня?" );
// clientSpentToday = Number( clientSpentToday );
//
// let clientSpentForAllTime = prompt( "Сколько клиент потратил за все время?" );
// clientSpentForAllTime = Number( clientSpentForAllTime );
//
//
// if ( clientSpentToday !== 0
// 	&& !isNaN( clientSpentToday )
// 	&& clientSpentForAllTime !== 0
// 	&& !isNaN( clientSpentForAllTime ) ) {
// 	let discount = 0;
// 	let count = 0;
// 	let clientDiscountToday;
//
// // общая потраченная сумма за всё время
// 	clientSpentForAllTime = clientSpentForAllTime + clientSpentToday;
//
// // логика скидки
// 	if ( clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300 ) {
// 		discount = 10;
// 		count = 0.1;
// 	} else if ( clientSpentForAllTime >= 300 && clientSpentForAllTime <= 500 ) {
// 		discount = 20;
// 		count = 0.2;
// 	} else if ( clientSpentForAllTime > 500 ) {
// 		discount = 30;
// 		count = 0.3;
// 	}
//
// // сумма скидки на сегодня
// 	clientDiscountToday = clientSpentToday * count;
// // сумма к оплате на сегодня с учётом скидки
// 	const clientSpentTodaySum = clientSpentToday - clientDiscountToday;
// 	alert( `Вам предоставляется скидка в ${ discount }%` );
// 	alert( `Спасибо, ${ clientName }! К оплате ${ clientSpentTodaySum }$. За все время в нашем ресторане вы
// потратили ${ clientSpentForAllTime }$.` ); } else { alert( "Сумма, которую клиент потратил за все время и которую
// потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку." ) }

// const userPassword = prompt("Введите пароль");
// const passwordVerification = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!-)]).{3,20}$/;
//
// if ( passwordVerification.test(userPassword) ) {
// 	alert("Пароль валидный. Добро пожаловать в аккаунт!");
// } else {
// 	alert("Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.");
// }


// const password = prompt("Введите пароль");
// const errorMessage =
// 	"Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.";
// const successMessage = "Пароль валидный. Добро пожаловать в аккаунт!";
//
// if (password === null || password.length < 3 || password.length > 30) {
// 	alert(errorMessage);
// } else {
// 	let hasBigSymbol = false;
// 	let hasNumbers = false;
// 	for (let i = 0; i < password.length; i++) {
// 		const symbol = password[i];
// 		const isNumberSymbol = !isNaN(parseInt(symbol));
// 		if (symbol === symbol.toUpperCase() && !isNumberSymbol) {
// 			hasBigSymbol = true;
// 		}
// 		if (isNumberSymbol) {
// 			hasNumbers = true;
// 		}
// 	}
//
// 	if (!hasBigSymbol || !hasNumbers) {
// 		alert(errorMessage);
// 	} else {
// 		alert(successMessage);
// 	}
// }

// const str = 'Джаваскрипт - лучший язык программирования!';
// str.toLowerCase();
// const vowelLetters = ["а","е","ё","и","о","у","ы","э","ю","я"];
// let count = 0;
//
// for ( let i = 0; i < str.length; i++ ) {
// 	const letterStr = str[i];
// 	for ( let j = 0; j < vowelLetters.length; j++ ) {
// 		const vowelLetter = vowelLetters[j];
// 		if ( letterStr === vowelLetter ) {
// 			count++;
// 		}
// 	}
// }
//
// console.log(count); // 14

// const str = 'TqhEity';
// let newStr = '';
//
// for ( let i = 0; i < str.length; i++ ) {
// 	newStr += str[ i ].repeat( i + 1 );
// 	if ( i + 1 === str.length ) {
// 		newStr += "";
// 	} else {
// 		newStr += " - ";
// 	}
// }
//
// console.log( newStr ) // "T-qq-hhh-EEEE-iiiii-tttttt-yyyyyyy"


// const str = 'TqhEity';
// let newStr = '';
//
// const strLowCase = str.toLowerCase();
// for ( let i = 0; i < strLowCase.length; i++ ) {
//
// 	newStr += strLowCase[ i ].toUpperCase();
// 	newStr += strLowCase[ i ].repeat( i );
// 	if ( i + 1 === strLowCase.length ) {
// 		newStr += "";
// 	} else {
// 		newStr += " - ";
// 	}
// }
//
// console.log( newStr ) // "T-Qq-Hhh-Eeee-Iiiii-Tttttt-Yyyyyyy"


// const num = +prompt( "Введите число больше единицы на определение простого числа" );
// let flag = true;
// const messageTrue = "является";
// const messageFalse = "не является";
//
// if ( !isNaN( num ) && num !== 0 && num > 1 ) {
// 	for ( let i = 2; i < num; i++ ) {
// 		if ( num % i === 0 ) {
// 			flag = false; // если хотя бы один раз поделилось;
// 			alert( messageFalse );
// 			break;
// 		}
// 	}
// 	if ( flag ) alert( messageTrue );
//
// } else {
// 	alert( "Перезагрузите страницу и введите число больше единицы" );
// }


// const userText = prompt("Введите текст").trim();
// const wordFromText = prompt("Введи слово из текста").trim();
// const indexOfWord = userText.indexOf(wordFromText);
// alert(`Результат: ${userText.slice(0, indexOfWord)}`);
