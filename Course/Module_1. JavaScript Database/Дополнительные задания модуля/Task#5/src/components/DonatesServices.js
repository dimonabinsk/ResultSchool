const arrDonate = [];

export class DonatesServices {

	addDonateObject(dateId, dateFormat = "", donate = 0) {
		const objectDonate = {
			id:dateId,
			date:dateFormat,
			donate:donate,
		}
		arrDonate.push(objectDonate)
	}

	run() {
		return arrDonate;
	}


}