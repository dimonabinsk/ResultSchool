const computers = [
	{
		name: 'MacBook Pro 13',
		price: 150000
	},
	{
		name: 'MacBook Pro 14',
		price: 200000
	},
	{
		name: 'MacBook Pro 16',
		price: 300000
	},
];

const index = computers.findIndex(computer => computer.name === 'MacBook Pro 13');
if(index >= 0) computers.splice(index,1)

console.log(computers);
/*
 [
 {name: 'MacBook Pro 14', price: 200000},
 {name: 'MacBook Pro 16', price: 300000}
 ]
 */