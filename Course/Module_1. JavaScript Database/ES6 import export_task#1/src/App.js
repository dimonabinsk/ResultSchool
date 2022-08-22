import {ButtonHTML} from "./componets/ButtonHTML";


class App {
	run() {
		const button = new ButtonHTML().listener();
		document.body.append(button);
	}
}

export default App;