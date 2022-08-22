class Dictionary {
	constructor(name) {
		this.name = name;
		this.words = {};
	}

	add(words, description) {
		this.words[words] = {
			"word": words,
			"description": description,
		}
	}

	remove(key) {
		delete this.words[key];
	}

	showAllWords() {
		for(const wordsKey in this.words) {
			const wordsArr = Object.values(this.words[wordsKey]);
			console.log(`${wordsArr[0]} - ${wordsArr[1]}`);
		}
	}

}

class HardWordsDictionary extends Dictionary {

	add(words, description) {
		this.words[words] = {
			"word": words,
			"description": description,
			isDifficult: true,
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

// дилетант - Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.
// квант - Неделимая часть какой-либо величины в физике.