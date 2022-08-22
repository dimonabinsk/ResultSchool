let result = 0;
// [1016; 1937]
for ( let i = 1016; i < 1937; i++ ) {
	
	if (
		i % 3 === 0 &&
		i % 7 === 0 &&
		i % 2 !== 0 &&
		i % 5 !== 0 ) {
		result = i;
	}
}

console.log(result);

console.log( isEqualSymbols( "адрес", "среда" ) ); // true
console.log( isEqualSymbols( "ноутбук", "программист" ) ); // false

function isEqualSymbols( str1, str2 )
{
	const sumCharCodeAt1 = getSumCharCodeAt( str1.toLowerCase().trim() );
	const sumCharCodeAt2 = getSumCharCodeAt( str2.toLowerCase().trim() );

	return sumCharCodeAt1 === sumCharCodeAt2;
}

function getSumCharCodeAt( str )
{
	let sumCharCodeAt = 0;
		const strArr = str.split( "" );
		strArr.forEach( e =>
		{
			sumCharCodeAt += e.charCodeAt( 0 );
		} )
	
	return sumCharCodeAt;
}

function unique(arr) {
	const newArr = [...new Set(arr)];
	console.log(newArr);
	return newArr;
}

unique([1, 1, 2, 2, 4, 2, 3, 7, 3]); // => [1, 2, 4, 3, 7]

function isPalindrome(str) {
	if(
		str === str.split("").reverse().join("")
	) {
		console.log("Palindrome: ",true)
	} else {
		console.log("Palindrome: ",false)
	}

}

isPalindrome("racecar"); // true
isPalindrome("programmer"); // false