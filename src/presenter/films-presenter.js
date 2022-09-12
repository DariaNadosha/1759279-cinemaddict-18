import FilmsContainerView from '../view/films-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import {render} from '../render.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsView from '../view/films-view.js';

export default class FilmsPresenter {
  filmsSection = new FilmsView();
  filmsList = new FilmsListView();
  filmComponent = new FilmsContainerView();


  init = (filmContainer) => {
    this.filmContainer = filmContainer;

    render(this.filmsSection, this.filmContainer);
    render(this.filmsList, this.filmsSection.getElement());

    render(this.filmComponent, this.filmsList.getElement());

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(), this.filmComponent.getElement());
    }


    render(new ShowMoreButtonView(), this.filmsList.getElement());
  };
}
