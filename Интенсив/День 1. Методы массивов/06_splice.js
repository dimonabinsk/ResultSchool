const languages = ['JavaScript', 'C#', 'Java', 'English', 'Go', 'Python'];

languages.splice(3, 1, 'C++');

console.log(languages);
// ['JavaScript', 'C#', 'Java', 'C++', 'Go', 'Python']