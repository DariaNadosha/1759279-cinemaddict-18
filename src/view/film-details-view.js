import {createElement} from '../render.js';
import { formatStringToDateWithTime, formatMinutesToTime, formatStringToDate } from '../utils.js';
import { generateNameList, generateGenreTitle, generateGenreList} from '../utils.js';


const createFilmDetailsControlsTemplate = (
  `
    <section class="film-details__controls">
      <button type="button" class="film-details__control-button film-details__control-button--active film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
      <button type="button" class="film-details__control-button film-details__control-button--watched" id="watched" name="watched">Already watched</button>
      <button type="button" class="film-details__control-button film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
    </section>
  `
);

const createFilmDetailsInfoTemplate = (filmInfo) => {
  const {
    title, alternativeTitle, totalRating, poster, ageRating, director,
    writers, actors, release, runtime, genre, description
  } = filmInfo;

  return `
  <div class="film-details__info-wrap">
  <div class="film-details__poster">
    <img class="film-details__poster-img" src=${poster} alt="${title}">

    <p class="film-details__age">${ageRating}+</p>
  </div>

  <div class="film-details__info">
    <div class="film-details__info-head">
      <div class="film-details__title-wrap">
        <h3 class="film-details__title">${title}</h3>
        <p class="film-details__title-original">Original: ${alternativeTitle}</p>
      </div>

      <div class="film-details__rating">
        <p class="film-details__total-rating">${totalRating}</p>
      </div>
    </div>

    <table class="film-details__table">
      <tr class="film-details__row">
        <td class="film-details__term">Director</td>
        <td class="film-details__cell">${director}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Writers</td>
        <td class="film-details__cell">${generateNameList(writers)}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Actors</td>
        <td class="film-details__cell">${generateNameList(actors)}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Release Date</td>
        <td class="film-details__cell">${formatStringToDate(release)}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Runtime</td>
        <td class="film-details__cell">${formatMinutesToTime(runtime)}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Country</td>
        <td class="film-details__cell">${release.releaseCountry}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">${generateGenreTitle(genre)}</td>
        <td class="film-details__cell">
          ${generateGenreList(genre)}
      </tr>
    </table>
    <p class="film-details__film-description">
      ${description}
    </p>
  </div>`;
};

const createFilmDetailsFormTemplate = (
  `
  <form class="film-details__new-comment" action="" method="get">
    <div class="film-details__add-emoji-label"></div>

    <label class="film-details__comment-label">
      <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
    </label>

    <div class="film-details__emoji-list">
      <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
      <label class="film-details__emoji-label" for="emoji-smile">
        <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
      </label>

      <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
      <label class="film-details__emoji-label" for="emoji-sleeping">
        <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
      </label>

      <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
      <label class="film-details__emoji-label" for="emoji-puke">
        <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
      </label>

      <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
      <label class="film-details__emoji-label" for="emoji-angry">
        <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
      </label>
    </div>
  </form>
  `
);

const createCommentTemplate = (comments) => {
  const {emotion, comment, author, date} = comments;
  return `
  <li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">
  </span>
  <div>
    <p class="film-details__comment-text">${comment}</p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${author}</span>
      <span class="film-details__comment-day">${formatStringToDateWithTime(date)}</span>
      <button class="film-details__comment-delete">Delete</button>
    </p>
  </div>
  </li>
`;
};

const createFilmDetailCommentsTemplate = (comments) =>
  `
  <ul class="film-details__comments-list">
    ${comments.map(createCommentTemplate).join('')}
  </ul>
  `;

const createFilmDetailsTemplate = ({filmInfo}, comments) => (
  `
  <section class="film-details">
    <div class="film-details__inner">
      <div class="film-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>

          ${createFilmDetailsInfoTemplate(filmInfo)}

        </div>

          ${createFilmDetailsControlsTemplate}
      </div>

      <div class="film-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">0</span></h3>

          ${createFilmDetailCommentsTemplate(comments)}

          ${createFilmDetailsFormTemplate}

        </section>
      </div>
    </div>
  </section>
`
);

export default class FilmDetailsView {
  constructor(film, comments) {
    this.film = film;
    this.comments = comments;
  }

  #element = null;

  get template() {
    return createFilmDetailsTemplate(this.film, this.comments);
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
