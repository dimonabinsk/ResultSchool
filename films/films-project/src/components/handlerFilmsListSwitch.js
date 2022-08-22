import {fromStorage} from "../storage/fromStorage.js";
import {renderFilms} from "./renderFilms.js";


// функция-переключатель списков
export function handlerFilmsListSwitch(switcherButton, allFilms, favouriteFilms) {
	const filmsContainerHTML =
		document.querySelector(".film-cards-container");
	const filmsCardContainerTitleHTML =
		document.querySelector(".film-cards-container__title");

	const filterFavouriteFilms = fromStorage(allFilms).filter(({isFavourite}) => isFavourite);


	switch(filmsContainerHTML.id) {
		case allFilms:
			filmsCardContainerTitleHTML.innerHTML = "Любимые фильмы";
			switcherButton.innerHTML = "Все фильмы";
			filmsContainerHTML.remove();
			renderFilms(filterFavouriteFilms, favouriteFilms);
			break;
		case favouriteFilms:
			filmsCardContainerTitleHTML.innerHTML = "Все фильмы";
			switcherButton.innerHTML = "Смотрите любимые фильмы";
			filmsContainerHTML.remove();
			renderFilms(fromStorage(allFilms), allFilms);
			break;
		default:
			break;
	}


}