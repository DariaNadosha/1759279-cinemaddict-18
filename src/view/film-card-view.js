import {createElement} from '../render.js';
import { formatStringToYear, formatMinutesToTime } from '../utils.js';

const createFilmCardInfoTemplate = (filmInfo, commentsLength) => {
  const {title, totalRating, poster,
    release, runtime, genre, description
  } = filmInfo;

  return `
  <a class="film-card__link">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${totalRating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${formatStringToYear(release.date)}</span>
    <span class="film-card__duration">${formatMinutesToTime(runtime)}</span>
    <span class="film-card__genre">${genre[0]}</span>
  </p>

  <img src="${poster}" alt="" class="film-card__poster">
  <p class="film-card__description">${description}</p>
  <span class="film-card__comments">${commentsLength} comments</span>
</a>
  `;
};

const createFilmCardTemplate = ({filmInfo, comments}) =>
  `
  <article class="film-card">

    ${createFilmCardInfoTemplate(filmInfo, comments.length)}

    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist film-card__controls-item--active" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>
    </div>
  </article>
  `;

export default class FilmCardView {
  constructor(film) {
    this.film = film;
  }

  #element = null;

  get template() {
    return createFilmCardTemplate(this.film);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
