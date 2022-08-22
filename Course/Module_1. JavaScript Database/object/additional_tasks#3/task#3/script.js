// getKiller(
// 	{
// 		James:["Jacob", "Bill", "Lucas"],
// 		Johnny:["David", "Kyle", "Lucas"],
// 		Peter:["Lucy", "Kyle"]
// 	},
// 	["Lucas", "Bill"]
// ); // Убийца James

// getKiller(
// 	{
// 		Brad:[],
// 		Megan:["Ben", "Kevin"],
// 		Finn:[]
// 	},
// 	["Ben"]
// ); // Убийца Megan

/*
 Твоя задача состоит в том, чтобы создать функцию getKiller().
 Она принимает в себя 2 параметра:
 1. suspectInfo - объект, в котором ключи - это подозреваемые в преступлении люди,
 а значения - массивы людей, которых видели подозреваемые в день убийства.
 2. deadPeople - массив с именами людей, которых убил преступник.
 Преступником является тот, кто видел всех убитых людей в день убийства.
 Функция getKiller() должна возвращать имя преступника.
 */


// function getKiller(suspectInfo, deadPeople) {
// 	const newKiller = {...suspectInfo};
// 	for(const newKillerKey in newKiller) {
// 		let contains;
// 		contains = deadPeople.map(item => {
// 			return newKiller[newKillerKey].includes(item);
// 		});
// 		if(deadPeople.length >= 2) {
// 			if(contains.reduce((a, b) => a + b) === deadPeople.length) {
// 				console.log(newKillerKey);
// 				return newKiller;
// 			}
// 		} else if(deadPeople.length < 2) {
// 			if(contains[0]) {
// 				console.log(newKillerKey);
// 				return newKiller;
// 			}
// 		}
// 	}
// }



const getKiller = (suspectInfo, deadPeople) => {
	const killers = {};
	Object.keys(suspectInfo).forEach((name) => {
		for (let people of suspectInfo[name]) {
			console.log("people",people);
			if(deadPeople.includes(people)) {
				killers[name] += 1
			} else {
				killers[name] = 0
			}
		}

	});
	console.log("kil",killers)
	// console.log("killers", Object.entries(killers).sort((a, b) =>{
	// 	console.log(b[1] - a[1]);
	// 	return b[1] - a[1];
	// })[0])

	return Object.entries(killers).sort((a, b) =>{

		return b[1] - a[1];
	})[0][0];
};



const result = getKiller({
		James: ["Jacob",  "Lucas"],
		Johnny: ["David","Bill", "Kyle", "Lucas"],
		Peter: ["Lucy", "Kyle"]
	},
	["Lucas", "Bill"])
console.log(result)
