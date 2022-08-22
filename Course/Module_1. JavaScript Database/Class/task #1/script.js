/*Тебе дана функция-конструктор, с помощью которой можно создавать экземпляры объектов.

 Твоя задача состоит в том, чтобы переписать данную функцию на класс (class):
 */


// function Student(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	this.technologies = [];
// 	this.status = "Junior";
// 	this.setTechnologies = function (technologies) {
// 		this.technologies = [...this.technologies, ...technologies];
// 	};
// 	this.setNewStatus = function (newStatus) {
// 		this.status = newStatus;
// 	};
// }
// const student = new Student("Maxim", 20);
// student.setTechnologies(["HTML", "CSS", "JavaScript"]);
// student.setNewStatus("Middle");
// console.log(student);

class Student {

	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.technologies = [];
		this.status = "Junior";
	}

	setTechnologies(technologies) {
		return this.technologies = [...this.technologies, ...technologies];
	}

		setNewStatus(newStatus)  {
		return this.status = newStatus;
	}
}
const student = new Student("Maxim", 20);
student.setTechnologies(["HTML", "CSS", "JavaScript"]);
student.setNewStatus("Middle");
console.log(student);