import { render,replace } from '../framework/render.js';
import EventListView from '../view/event-list-view.js';
import SortForm from '../view/sort-view.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';

export default class TripPresenter {
  #pointsListComponent = new EventListView();
  #SortForm = new SortForm();

  #pointsContainer = null;
  #destinationsModel = null;
  #offersModel = null;
  #pointsModel = null;
  #tripPoints = null;

  constructor({ pointsContainer, destinationsModel, offersModel, pointsModel }) {
    this.#pointsContainer = pointsContainer;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#pointsModel = pointsModel;

  }

  init() {
    //this.#tripPoints = [...this.#pointsModel.get()];
    render(this.#SortForm, this.#pointsListComponent);
    render(this.#pointsListComponent, this.#pointsContainer);
    this.#tripPoints.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if(evt === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({
      point,
      offers: this.#offersModel.getOffersById(this.#tripPoints[i].type, this.tripPoints[i].offers),
      destination: this.#destinationsModel.getDestinationsById(this.#tripPoints[0].destination),
      onPointClick: () => {
        replacePointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const pointEditComponent = new EditPointView({
      point,
      checkedOffers: [...this.#offersModel.getOffersById(this.tripPoints[0].type, this.tripPoints[0].offers)],
      offers: this.#offersModel.getOffersByType(this.tripPoints[0].type),
      destination: this.#destinationsModel.getDestinationsById(this.tripPoints[0].destination),
      allOffers: this.#offersModel.get(),
      allDestinations: this.#destinationsModel.get(),
      onPointClick: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onPointEditSubmit: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
    });

    function replacePointToForm() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceFormToPoint() {
      replace(pointComponent, pointEditComponent);
    }

    render(pointComponent, this.#pointsListComponent.element);
  }
}
