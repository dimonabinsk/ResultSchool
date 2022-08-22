/*
 * */


class CarService {
	static #DefaultWorkingHours = {
		from:"9:00",
		till:"20:00",
	}

	constructor(name, workingHours) {
		this.name = name;
		this.workingHours = workingHours || this.#DefaultWorkingHours;
	}

	repairCar(carName) {
		if(typeof carName !== "string" && !carName) {
			return console.error(
				"Вам необходимо указать название машины, чтобы ее отремонтировать"
			);
		} else {
			const timeIsNow = new Date().getHours();
			const timeFrom = +this.workingHours.from.split(":")[0];
			const timeTill = +this.workingHours.till.split(":")[0];

			if(timeIsNow >= timeFrom && timeIsNow < timeTill) {
				alert(`Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`);
			} else {
				alert("К сожалению, мы сейчас закрыты. Приходите завтра");
			}
		}
	}

}

const carService = new CarService("RepairCarNow", {
	from:"8:00",
	till:"20:00"
});
carService.repairCar("BMW");
carService.repairCar();




