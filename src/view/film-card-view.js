import {createElement} from '../render.js';
import {createFilmCardControlsTemplate} from './templates.js';
import {createFilmCardInfoTemplate} from './templates.js';

const createFilmCardTemplate = () => (
  `
    <article class="film-card">
      <a class="film-card__link">
        <h3 class="film-card__title">Popeye the Sailor Meets Sindbad the Sailor</h3>
        <p class="film-card__rating">6.3</p>

        ${createFilmCardInfoTemplate}

        <img src="./images/posters/popeye-meets-sinbad.png" alt="" class="film-card__poster">
        <p class="film-card__description">In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…</p>
        <span class="film-card__comments">0 comments</span>
      </a>

      ${createFilmCardControlsTemplate}

    </article>
  `
);

export default class FilmCardView {
  getTemplate() {
    return createFilmCardTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
