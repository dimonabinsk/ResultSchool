

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

const dictionary = new Dictionary("Толковый словарь");
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add(
	"Веб-разработчик",
	"Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
);
dictionary.add(
	"Веб-разработчик",
	"Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
);
dictionary.remove("JavaScript");
dictionary.showAllWords();
console.log(dictionary);
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает
// и дополняет существующие