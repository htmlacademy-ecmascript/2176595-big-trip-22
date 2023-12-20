import { render } from '../render.js';
import EventListView from '../view/event-list-view.js';
import SortForm from '../view/sort-view.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';
//import AddPoint from '../view/add-point-view.js';


export default class TripPresenter {
  pointsListComponent = new EventListView();

  constructor({ pointsContainer, destinationsModel, offersModel, pointsModel }) {
    this.pointsContainer = pointsContainer;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
    this.pointsModel = pointsModel;
  }

  init() {
    this.tripPoints = [...this.pointsModel.getPoints()];
    render(this.pointsListComponent, this.pointsContainer);
    render(new SortForm(), this.pointsListComponent.getElement());

    render(new EditPointView({
      point: this.tripPoints[0],
      checkedOffers: [...this.offersModel.getOffersById(this.tripPoints[0].type, this.tripPoints[0].offers)],
      offers: this.offersModel.getOffersByType(this.tripPoints[0].type),
      destination: this.destinationsModel.getDestinationsById(this.tripPoints[0].destination),
      allOffers: this.offersModel.getOffers(),
      allDestinations: this.destinationsModel.getDestinations(),

    }), this.pointsListComponent.getElement());


    //render(new AddPoint(), this.pointsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView({
        point: this.tripPoints[i],
        offers: this.offersModel.getOffersById(this.tripPoints[i].type, this.tripPoints[i].offers),
        destination: this.destinationsModel.getDestinationsById(this.tripPoints[0].destination),
      }), this.pointsListComponent.getElement());
    }
  }
}
