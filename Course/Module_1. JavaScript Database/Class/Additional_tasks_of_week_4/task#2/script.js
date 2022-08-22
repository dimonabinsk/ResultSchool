class Dictionary {
	#name;
	#words;

	constructor(name) {
		this.#name = name;
		this.#words = {};
	}

	get mainName() {
		return this.#name;
	}

	get allWords() {
		return this.#words;
	}

	set mainName(name) {
		this.#name = name;
	}

	_addNewWord(wordKey, wordObj) {
		this.#words[wordKey] = {...wordObj}
	}


	add(word, description) {
		if(!this.#words[word]) {
			this._addNewWord(word, {
				"word":word,
				"description":description,
			})
		}

	}

	remove(key) {
		delete this.#words[key];
	}

	showAllWords() {
		for(const wordsKey in this.#words) {
			const wordsArr = Object.values(this.#words[wordsKey]);
			console.log(`${wordsArr[0]} - ${wordsArr[1]}`);
		}
	}

}

class HardWordsDictionary extends Dictionary {

	add(word, description) {
		if(!this.allWords[word]) {
			this._addNewWord(word, {
				"word":word,
				"description":description,
				"isDifficult":true // добавляется если слово сложное
			})
		}

	}
}

const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

hardWordsDictionary.add(
	"дилетант",
	"Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);

hardWordsDictionary.add(
	"неологизм",
	"Новое слово или выражение, а также новое значение старого слова."
);

hardWordsDictionary.add(
	"квант",
	"Неделимая часть какой-либо величины в физике."
);

hardWordsDictionary.remove("неологизм");

hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.mainName = "Новый Словарь";
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова дилетант и квант


