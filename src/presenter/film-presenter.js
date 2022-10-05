import FilmsContainerView from '../view/films-container-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsView from '../view/films-view.js';
//import FilmDetailsView from '../view/film-details-view.js';

import {render} from '../render.js';

export default class FilmPresenter {
  filmsSection = new FilmsView();
  filmsList = new FilmsListView();
  filmComponent = new FilmsContainerView();


  init = (filmContainer, filmsModel, commentsModel) => {
    this.filmContainer = filmContainer;
    this.filmsModel = filmsModel;
    this.commentsModel = commentsModel;

    this.films = [...filmsModel.films];

    render(this.filmsSection, this.filmContainer);
    render(this.filmsList, this.filmsSection.element);

    render(this.filmComponent, this.filmsList.element);

    //const comments = [...this.commentsModel.get(this.films[0])];

    //render(new FilmDetailsView(this.films[0], comments), this.filmContainer.parentElement);
  };
}
