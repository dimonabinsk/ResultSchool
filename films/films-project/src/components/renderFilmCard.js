// Отрисовка карточки фильма

import IMG_Favourite from "../../public/img/favourite.png";
import IMG_notFavourite from "../../public/img/notFavourite.png";



export function renderFilmCard(film, targetContainer) {
	// console.log(targetContainer)
	const {
		imgUrl,
		movieName,
		releaseYear,
		isFavourite
	} = film;
	// console.log(imgUrl, movieName)
	const filmCardDivHTML = document.createElement("div");
	filmCardDivHTML.className = "film-card";

	const filmImgHTML = document.createElement("img");
	filmImgHTML.className = "film-card__poster";
	filmImgHTML.src = imgUrl;

	const filmCardTitleHTML = document.createElement("div");
	filmCardTitleHTML.className = "film-card__title";
	filmCardTitleHTML.textContent = movieName;

	const filmCardYearHTML = document.createElement("div");
	filmCardYearHTML.className = "film-card__year";
	filmCardYearHTML.textContent = releaseYear;

	const filmCardBtnHTML = document.createElement("button");
	filmCardBtnHTML.className = "film-card__button";

	const filmBtnImgHTML = document.createElement("img");
	filmBtnImgHTML.className = "film-card__button-img";
	filmBtnImgHTML.src = isFavourite ? IMG_Favourite : IMG_notFavourite;

	filmCardBtnHTML.append(filmBtnImgHTML);
	filmCardDivHTML.append(
		filmImgHTML,
		filmCardTitleHTML,
		filmCardYearHTML,
		filmCardBtnHTML
	);
	targetContainer.append(filmCardDivHTML);

}