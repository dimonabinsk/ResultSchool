const nextBirthdayDate = new Date( 2022, 11, 23, );

console.log(getDaysBeforeBirthday(nextBirthdayDate));

function convertMsToDays( time ) {
	return Math.round( time / 1000 / 60 / 60 / 24 );
}

function getDaysBeforeBirthday( birthday ) {
	const newDate = new Date();
	return convertMsToDays( birthday ) - convertMsToDays( newDate.getTime() )
}