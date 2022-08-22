const newDate = new Date(); // Дата сейчас.

console.log( getDateFormat( newDate, "." ) );

function getDateFormat( date, separator ) {
	let dateFormat;
	const day = setZero( date.getDate() );// Получаем день месяца.
	const month = setZero( date.getMonth());// Получаем месяц.
	const year = date.getFullYear();// Получаем год.
	// Складываем все данные в строку через сепаратор.
	dateFormat = `${ day }${ separator }${ month }${ separator }${ year }`;
	return dateFormat;
}
// Добавляем спереди к числу "0", если число одноразрядное.
function setZero( number ) {
	if ( number < 10 ) number = `0${number}`;
	return number;
}