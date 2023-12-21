//import { RenderPosition, render } from './render.js';
import FilterView from './view/filter-form-view.js';
import TripView from './view/trip-form-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import DestinationsModel from './model/destination-model.js';
import PointsModel from './model/point-model.js';
import OffersModel from './model/offer-model.js' ;
import { render, RenderPosition } from './framework/render.js';

const pageMainHeader = document.querySelector('.page-header');
const mainHeaderTripElement = pageMainHeader.querySelector('.trip-main');
const mainHeaderFilters = pageMainHeader.querySelector('.trip-main__trip-controls');
const tripEventsElement = document.querySelector('.trip-events');

const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();
const pointsModel = new PointsModel();
destinationsModel.init();
offersModel.init();
pointsModel.init();

const tripPresenter = new TripPresenter({
  pointsContainer: tripEventsElement,
  destinationsModel,
  offersModel,
  pointsModel
});

render(new TripView(), mainHeaderTripElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), mainHeaderFilters, RenderPosition.BEFOREEND);

tripPresenter.init();
