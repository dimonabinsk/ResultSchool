import {renderFilms} from "./components/renderFilms.js";
import {filmsMock} from "./core/filmsMock.js";
import {
	ALL_FILMS,
	FAVOURITE_FILMS
} from "./core/vars/varsAllFilms.js";
import {fromStorage} from "./storage/fromStorage.js";
import {toStorage} from "./storage/toStorage.js";
import {handlerFilmsListSwitch} from "./components/handlerFilmsListSwitch.js";
import {listenerLikeButtons} from "./components/listenerLikeButtons.js";


export function render() {
	if(!fromStorage(ALL_FILMS)) {
		toStorage(ALL_FILMS,filmsMock);
	}
	renderFilms(fromStorage(ALL_FILMS), ALL_FILMS);

	// функция-переключатель списков
	const favouritesFilmsBtnHTML =
		document.querySelector(".film-cards-container__favourite-films-btn");
	favouritesFilmsBtnHTML.addEventListener("click", () => {
		handlerFilmsListSwitch(favouritesFilmsBtnHTML, ALL_FILMS, FAVOURITE_FILMS);
	});

	listenerLikeButtons();




}