import NewFilmContainerView from '../view/film-container-view.js';
import NewFilmCardView from '../view/film-card-view.js';
import NewFilmCardInfoView from '../view/film-card-info-view.js';
import NewFilmCardControlsView from '../view/film-card-controls-view.js';
import NewShowMoreButtonView from '../view/show-more-button-view.js';
import {render} from '../render.js';

export default class FilmPresenter {
  filmComponent = new NewFilmContainerView();
  filmCardContainer = new NewFilmCardView();

  init = (filmContainer) => {
    this.filmContainer = filmContainer;

    for (let i = 0; i < 5; i++) {
      render(new NewFilmCardView(), this.filmCardContainer.getElement());
      render(new NewFilmCardInfoView(), this.filmCardContainer.getElement());
      render(new NewFilmCardControlsView(), this.filmCardContainer.getElement());
    }

    render(new NewShowMoreButtonView(), this.filmComponent.getElement());
  };
}
