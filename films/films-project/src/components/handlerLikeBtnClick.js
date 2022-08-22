import {fromStorage} from "../storage/fromStorage.js";
import {ALL_FILMS, FAVOURITE_FILMS} from "../core/vars/varsAllFilms.js";
import {sortAllFilmsByIsFavourite} from "./sortAllFilmsByIsFavourite.js";
import {toStorage} from "../storage/toStorage.js";
import {renderFilms} from "./renderFilms.js";
import {sortFavouriteFilms} from "./sortFavouriteFilms.js";

export function handlerLikeBtnClick(listType, filmNumber) {

	const allFilms = fromStorage(listType);
	allFilms[filmNumber].isFavourite = !allFilms[filmNumber].isFavourite;
	// console.log(listType)
// получаем массив отсортированных фильмов первым по индексу будет isFavourite=true
	const sortedAllFilms = sortAllFilmsByIsFavourite(allFilms);
	// console.log(sortedAllFilms)
// отправляем в локальную память массив отсортированных фильмов первым по индексу будет isFavourite=true
	toStorage(listType, sortedAllFilms);

	// удаляем контейнер с фильмами из DOM
	const filmListContainerHTML = document.querySelector(".film-cards-container");
	const idContainer = filmListContainerHTML.getAttribute("id");
	const filmListContainerAttributeHTML = document.getElementById(idContainer);
	filmListContainerAttributeHTML.remove();
// перерисовываем заново список согласно отфильтрованному массиву
// 	console.log(allFilms)
	switch(idContainer) {
		case ALL_FILMS:
			renderFilms(sortedAllFilms, ALL_FILMS);

			break;
		case FAVOURITE_FILMS:
			renderFilms(sortFavouriteFilms(allFilms), FAVOURITE_FILMS);

			break;
		default:
			return

	}


}