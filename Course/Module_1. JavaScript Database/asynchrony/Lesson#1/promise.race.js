// Promise.race() возвращает самый первый выполненный promise

const promise1 = new Promise(resolve => {
	setTimeout(() => {
		resolve("promise1");
	}, 500);
});

const promise2 = new Promise(resolve => {
	setTimeout(() => {
		resolve("promise2");
	}, 1000);
});

const promise3 = new Promise(reject => {
	setTimeout(() => {
		reject("promise3");
	}, 100);
});

Promise.race([promise1, promise2, promise3])
	.then(result => console.log("result", result))
	.catch(error => console.error("error", error));