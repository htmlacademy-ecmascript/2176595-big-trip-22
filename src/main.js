import { RenderPosition, render } from './render.js';
import FilterView from './view/filter-form-view.js';
import TripView from './view/creation-trip-form.js';
import TripPresenter from './presenter/presenter.js';

const pageMainHeader = document.querySelector('.page-header');
const mainHeaderTripElement = pageMainHeader.querySelector('.trip-main');
const mainHeaderFilters = pageMainHeader.querySelector('.trip-main__trip-controls');
const tripEventsElement = document.querySelector('.trip-events');

const tripPresenter = new TripPresenter({pointsContainer: tripEventsElement });

render(new TripView(), mainHeaderTripElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), mainHeaderFilters, RenderPosition.BEFOREEND);

tripPresenter.init();
