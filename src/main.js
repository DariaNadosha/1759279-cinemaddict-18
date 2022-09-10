import NewNavigationView from './view/navigation-view.js';
import NewProfileHeaderView from './view/header-profile-view.js';
import NewSortView from './view/sort-view.js';
import {render} from './render.js';
import FilmPresenter from './presenter/film-presenter.js';

const siteMainElement = document.querySelector('.main');
const siteNavigationElement = siteMainElement.querySelector('.main-navigation');
const siteHeaderElement = document.querySelector('.header');
const siteProfileElement = siteHeaderElement.querySelector('.header__profile');

render(new NewNavigationView (), siteNavigationElement);
render(new NewProfileHeaderView(), siteProfileElement);
render(new NewSortView(), siteMainElement);

FilmPresenter.init(siteMainElement);
