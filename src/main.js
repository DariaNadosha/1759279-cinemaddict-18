import NavigationView from './view/navigation-view.js';
import HeaderProfileView from './view/header-profile-view.js';
import SortView from './view/sort-view.js';
import {render} from './render.js';
import FilmsPresenter from './presenter/films-presenter.js';
import FooterStatisticsView from './view/statistics-footer-view ';
import { generateFilms } from './mock/film.js';
import CommentsModel from './model/comments-model.js';
import FilmsModel from './model/films-model.js';
import FilmPresenter from './presenter/film-presenter.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');
const siteFooterStatistics = siteFooterElement.querySelector('.footer__statistics');

render(new NavigationView(), siteMainElement);
render(new HeaderProfileView(), siteHeaderElement);
render(new SortView(), siteMainElement);
render(new FooterStatisticsView(), siteFooterStatistics);

const filmsPresenter = new FilmsPresenter();
const filmPresenter = new FilmPresenter();

const filmsData = generateFilms();

const filmsModel = new FilmsModel(filmsData);
const commentsModel = new CommentsModel(filmsModel);
filmsPresenter.init(siteMainElement, filmsModel, commentsModel);
filmPresenter.init(siteMainElement, filmsModel, commentsModel);
