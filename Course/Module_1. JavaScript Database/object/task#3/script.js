/** obj - объект, с которым будет работать функция.
	key - ключ объекта.
 	action - действие, которое мы будем совершать над объектом.

 Параметр action может быть 4-мя значениями:
	 1.	get - если action равен get, то функция handleObject()
			должна вернуть значение ключа key в объекте obj.
	 2.	add - если action равен add, то функция handleObject()
			должна добавить новый ключ key в объект object и присвоить значение пустой строки "".
			Также из функции необходимо возвратить обновленный объект obj.
	 3.	delete - если action равен delete, то функция handleObject()
			должна удалить свойство key из объекта obj и возвратить обновленный объект.
	 4.	Если action равен любому другому значению, то функция handleObject()
			должна возвратить объект obj.
 */

const student = {
	name: "Maxim",
	programmingLanguage: "JavaScript"
};

const result = handleObject( student, "programmingLanguage", "delete" );
console.log( "result", result ); // { name: 'Maxim' }


function handleObject( obj, key, action ) {
	if ( typeof obj === "object" && key && action) {
		if ( action === "get" ) {
			return obj[key];
		} else if ( action === "add" ) {
			obj[ key ] = "";
			return obj;
		} else if ( action === "delete" ) {
			delete obj[ key ];
			console.log( obj )
			return obj;
		} else {
			return obj;
		}
	} else {
		return "Error";
	}
}