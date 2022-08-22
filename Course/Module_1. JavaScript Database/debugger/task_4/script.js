let numbers = [ 10, 4, 100, -5, 54, 2 ];
let sum = 0;

console.log( numbers );

// Через цикл for
for ( let i = 0; i < numbers.length; i += 1 ) {
	const resultNum = numbers[ i ] ** 3;
	console.log( resultNum )
	sum += resultNum;
}
console.log( sum ); // 1158411
console.log( numbers );

// Через цикл for of
sum = 0;
for ( let num of numbers ) {
	num = num  ** 3;
	console.log( num );
	sum += num;
}

console.log( sum ); // 1158411