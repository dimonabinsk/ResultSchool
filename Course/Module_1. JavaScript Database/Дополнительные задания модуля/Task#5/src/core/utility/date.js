export  class getTodayDateFormat {

	runDateFormat() {
		return new Date().toLocaleDateString('ru', {
			year:'numeric',
			month:'long',
			day:'numeric',
			hour:'numeric',
			minute:'numeric',
			second:'numeric'
		});
	}


}