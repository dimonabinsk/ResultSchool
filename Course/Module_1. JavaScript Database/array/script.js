// const peopleWaiting = [
// 	"Ирина",
// 	"Кристина",
// 	"Олег",
// 	"Кирилл",
// 	"Мария",
// 	"Светлана",
// 	"Артем",
// 	"Глеб",
// 	"Максим"
// ];
//
// const peopleWhoReceivedParcels = 4;
// let name = "";
//
// giveParcel( peopleWaiting );
// leaveQueueWithoutParcel( peopleWaiting );
// console.log(peopleWaiting);
//
// function giveParcel( arrayOfNames ) {
// 	for ( let i = 0; i < peopleWhoReceivedParcels; i++ ) {
// 		name = arrayOfNames.shift();
// 		alert( `${ name } получил(а) посылку. В очереди осталось ${ arrayOfNames.length } человек.` );
// 	}
// }
//
// function leaveQueueWithoutParcel( arrayOfNames ) {
// 	const arrayOfNamesLength = arrayOfNames.length;
// 	for ( let i = 0; i < arrayOfNamesLength; i++ ) {
// 		name = arrayOfNames.pop();
// 		alert( `${ name } не получил(а) посылку и ушел(ла) из очереди` );
// 	}
// }

//
// const coffees = [ "Latte", "Cappuccino", "Americano" ];
// const coffeeName = prompt( "Поиск кофе по названию:" );
//
// if ( coffeeName ) {
// 	function getIndexCoffee( nameCoffee ) {
// 		const modifiedCoffeeLineName = nameCoffee
// 			.trim()
// 			.replaceAll(
// 				nameCoffee,
// 				nameCoffee.toLowerCase() )
// 			.replace(
// 				nameCoffee[ 0 ],
// 				nameCoffee[ 0 ].toUpperCase()
// 			);
//
// 		// console.log(modifiedCoffeeLineName);
//
// 		const indexCoffee = coffees.findIndex( ( name ) => {
// 			return name === modifiedCoffeeLineName;
// 		} );
//
// 		if ( indexCoffee >= 0 ) {
// 			alert(
// 				`Держите ваш любимый кофе ${ coffees[ indexCoffee ] }. Он ${ indexCoffee + 1 }-й по популярности в
// нашей кофейне` ); } else { alert( "К сожалению, такого вида кофе нет в наличии" ); } // console.log( indexCoffee );
// }  getIndexCoffee( coffeeName ); } else { alert( "Перезагрузите страницу и введите название кофе, которое Вам
// приготовить" ); }


// const coffees = [ "Latte", "Cappuccino", "Americano" ];
// const prices = [ 1.5, 1, 2 ];
//
// const updatedPrices = prices.map( ( price ) => price + 0.5 );
//
// coffees.forEach( ( coffee, index ) => {
// 	alert( `Кофе ${ coffee } сейчас стоит ${ updatedPrices[ index ] } евро` );
// } );


// const clientsEstimations = [];
//
// function askClientToGiveEstimation() {
// 	const enterNumber = +prompt( "Как вы оцениваете нашу кофейню от 1 до 10?" );
// 	const isNan = !isNaN( enterNumber );
// 	if ( isNan  && enterNumber >= 1 && enterNumber <= 10 ) {
// 		clientsEstimations.push( enterNumber );
// 	}
// }
//
// for ( let i = 0; i < 5; i++ ) {
// 	askClientToGiveEstimation();
// }
//
// const goodEstimations = clientsEstimations.filter( ( item ) => item > 5 ).length;
// const notGoodEstimations = clientsEstimations.filter( ( item ) => item <= 5 ).length;
//
//
// alert(
// 	`Всего положительных оценок: ${ goodEstimations }; Всего отрицательных оценок: ${ notGoodEstimations }`
// );

// const numbers = [ 10, 4, 100, -5, 54, 2 ];
//
// // #1
// function calculateAmount1( arrayNumbers ) {
// 	let total = 0;
// 	for ( let i = 0; i < arrayNumbers.length; i++ ) {
// 		const cube = arrayNumbers[ i ] ** 3;
// 		total += cube;
// 	}
// 	console.log( "#1 sum:", total );// 1158411
// }
//
// calculateAmount1( numbers );
//
// // #2
// function calculateAmount2( arrayNumbers ) {
// 	let total = 0;
// 	for ( const numberElement of arrayNumbers ) {
// 		total += numberElement ** 3;
// 	}
// 	console.log( "#2 sum:", total );// 1158411
// }
//
// calculateAmount2( numbers );
//
// // #3
// function calculateAmount3( arrayNumbers ) {
// 	let total = 0;
// 	arrayNumbers.forEach( num => {
// 		return (total += num ** 3);
// 	} );
// 	console.log( "#3 sum:", total );// 1158411
// }
//
// calculateAmount3( numbers );
//
//
// // #4
// const sum = numbers.reduce( ( acc, item ) => {
// 	acc += item ** 3;
// 	return acc;
// }, 0 );
// console.log( '#4 sum:', sum ); // 1158411


// function checkQuestionAnswer( question, correctAnswer ) {
// 	const answer = prompt( question );
// 	if ( answer ) {
// 		const modifiedAnswer = answer
// 			.trim()
// 			.toUpperCase();
// 		const modifiedCorrectAnswer = correctAnswer.toUpperCase();
//
// 		modifiedAnswer === modifiedCorrectAnswer
// 			?
// 			alert( "Ответ верный" )
// 			:
// 			alert( "Ответ не верный" );
// 	}
// }
//
// checkQuestionAnswer( "Арбуз это фрукт или ягода?", "Ягода" );
// checkQuestionAnswer( "Сколько в среднем зубов у взрослого человека?", "32" );
// checkQuestionAnswer( "Как называется самая маленькая птица в мире?", "Колибри" );


// const text = "Привет! Как дела! Давно мы с тобой не виделись.";
// checkTextOnErrorSymbol( text, "а", showSuccessMessage, showErrorMessage );
//
// function showSuccessMessage( massage ) {
// 	console.log( massage );
// }
//
// function showErrorMessage( massage ) {
// 	console.error( massage );
// }
//
// function checkTextOnErrorSymbol(
// 	text,
// 	errorSymbol,
// 	successCallback,
// 	errorCallback
// ) {
// 	if ( text.includes( errorSymbol ) ) {
// 		for ( let i = 0; i < text.length; i++ ) {
// 			if ( errorSymbol === text[ i ] ) {
// 				errorCallback( `Найден запрещенный символ "${ text[ i ] }" "под индексом ${ i }"` )
// 			}
// 		}
// 	} else {
// 		successCallback( `В данном тексте нет запрещенных символов` );
// 	}
// }


// const goals = [ 8, 1, 1, 3, 2, -1, 5 ];
//
// const filterGoals = goals.filter( item => {
// 	return item >= 0;
// } );// матчи без автоматического поражения
//
// const numberOfGoalsScored = filterGoals
// 	.reduce( ( previousValue, currentValue ) => {
// 		return previousValue + currentValue;
// 	} ); //  всего сумма голов
//
// const maxScore = Math.max( ...goals );//  максимальное кол-во голов за матч
// const minScore = Math.min( ...filterGoals );//  минимальное кол-во голов за матч
// const mostProductiveMatch = []; // номер результативного матча
// const mostInconclusiveMatch = []; //  номер нерезультативного матча
// const automaticDefeats = goals.includes( -1 ) ? "да" : "нет";
// const averageNumberOfGoals = Math.ceil( numberOfGoalsScored / filterGoals.length ); // Среднее количество голов за
// матч const sortedMatches = filterGoals.sort( ( a, b ) => a - b ); // голы в порядке возрастания  for ( let i = 0; i
// < goals.length; i++ ) { const goal = goals[ i ]; if ( goal === maxScore ) { mostProductiveMatch.push( i + 1 ); }
// else if ( goal === minScore ) { mostInconclusiveMatch.push( i + 1 ); } }  // #1 alert( `Самый результативный матч
// был под номером ${ mostProductiveMatch[ 0 ] }. В нем было забито ${ maxScore } гол(ов)` ); // #2 alert( `Самые не
// результативные матчи были под номерами ${ mostInconclusiveMatch }. В каждом из них было забито по ${ minScore }
// мячу(а). ` ); // #3 alert( `Общее количество голов за сезон равно ${ numberOfGoalsScored }` ); // #4 alert( `Были
// автоматические поражения: ${ automaticDefeats }` ); // #5 alert( `Среднее количество голов за матч равно ${
// averageNumberOfGoals }` ); // #6 alert( sortedMatches );


// function correctionArray( expression ) {
// 	const checkForValidArray = (expression) => expression.some( item => Number( item ) === Number( item ) );
// 	if ( checkForValidArray( expression ) &&  expression.length > 0 && expression !== false  ) {
//
// 	let arrayExpression = expression.filter( Boolean ).filter( item => item !== " " );
// 		const arrayOfOperators = [ ">", "<", "=", "+", "-", "*", "/" ];
// 		let operatorFromAnArray = "";
//
// 		arrayOfOperators.forEach( ( operator ) => {
// 			if ( arrayExpression.includes( operator ) ) {
// 				operatorFromAnArray = operator;
// 			}
// 		} );
// 		// console.log( operatorFromAnArray );
// 		arrayExpression = arrayExpression.filter( number => {
// 			return Number( number ) === Number( number );
// 		} );
// 		// console.log( arrayExpression );
// 		if ( arrayExpression.length > 3 ) {
// 			for ( let i = 0; i < arrayExpression.length; i++ ) {
// 				arrayExpression.pop();
// 			}
// 			arrayExpression.splice( 1, 0, operatorFromAnArray )
//
// 			// console.log( arrayExpression );
// 			return arrayExpression;
// 		} else if ( arrayExpression.length === 3 ) {
// 			arrayExpression[ 2 ] = arrayExpression[ 1 ];
// 			arrayExpression[ 1 ] = operatorFromAnArray;
// 			// console.log( arrayExpression );
// 			return arrayExpression;
// 		} else if ( arrayExpression.length === 2 ) {
// 			arrayExpression[ 2 ] = arrayExpression[ 1 ];
// 			arrayExpression[ 1 ] = operatorFromAnArray;
// 			// console.log( arrayExpression );
// 			return arrayExpression;
// 		} else if ( arrayExpression.length < 2 ) {
// 			return console.error( "Error" );
// 		}
// 	} else {
// 		return console.error( "Error" );
// 	}
// }
//
//
// function getMathResult( expression ) {
// 	const correctArray = correctionArray( expression );
// 	let result;
// 	const a = +correctArray[ 0 ];
// 	const b = +correctArray[ 2 ];
// 	const operator = correctArray[ 1 ];
//
// 	switch ( operator ) {
// 		case "+":
// 			result = a + b;
// 			break;
// 		case "-":
// 			result = a - b;
// 			break;
// 		case "*":
// 			result = a * b;
// 			break;
// 		case "/":
// 			result = a / b;
// 			break;
// 		case ">":
// 			result = a > b;
// 			break;
// 		case "<":
// 			result = a < b;
// 			break;
// 		case "=":
// 			result = a === b;
// 			break;
// 		case "":
// 			result = 'Ошибка';
// 			break;
//
// 	}
// 	console.log(`[${correctArray}]`, result )
// }
//
// getMathResult(["100", "hello", "javascript", , "help200", "+", 4]); // 104
// getMathResult( [ "200", "+", 300 ] ); // 500
// getMathResult( [ "20", "-", "5" ] ); // 15
// getMathResult( [ 100, "/", 100 ] ); // 1
// getMathResult( [ 2, "-", 2 ] ); // 0
// getMathResult( [ "5", ">", "10" ] ); // false
// getMathResult( [ "5", "<", "10" ] ); // true
// getMathResult( [ "1", "=", 1 ] ); // true
// getMathResult( [ "1", "**", 1 ] ); // 'Ошибка'


// const array = [];
// for ( let i = 0; i < 3; i++ ) {
// 	array.push([]);
// 	for ( let j = 1; j < 6; j++ ) {
// 		array[i].push(j);
// 	}
// }
// console.log(array);

// const matrix = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];
// const array = [];
// for ( let i = 0; i < matrix.length; i++ ) {
// 	const elem = matrix[i];
// 	array.push(...elem);
// }
// console.log(array);






