import FilmsContainerView from '../view/films-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsView from '../view/films-view.js';

import {render} from '../render.js';

export default class FilmsPresenter {
  filmsSection = new FilmsView();
  filmsList = new FilmsListView();
  filmComponent = new FilmsContainerView();


  init = (filmContainer, filmsModel, commentsModel) => {
    this.filmContainer = filmContainer;
    this.filmsModel = filmsModel;
    this.commentsModel = commentsModel;

    this.filmsData = [...filmsModel.filmsData];

    render(this.filmsSection, this.filmContainer);
    render(this.filmsList, this.filmsSection.element);

    render(this.filmComponent, this.filmsList.element);

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(this.filmsData[i]), this.filmComponent.element);
    }

    render(new ShowMoreButtonView(), this.filmsList.element);
  };
}
