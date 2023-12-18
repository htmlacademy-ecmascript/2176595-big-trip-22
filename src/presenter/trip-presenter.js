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
    render(new SortForm(), this.pointsListComponent);

    render(new EditPointView({
      points: this.points[0],
      checkedOffers: [...this.offersModel.getOffersById(this.tripPoints[0].type, this.tripPoints[0].offers)],
      offers: this.offersModel.getOffersByType(this.tripPoints[0].type),
      destinations: this.destinationsModel.getDestinationsById(this.tripPoints[0].destination),

    }), this.pointsLIstComponent.getElement());


    //render(new AddPoint(), this.pointsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView({
        points: this.pointsModel[i],
        offers: this.offersModel.getOffersByType(this.tripPoints[0].type),
        destinations: this.destinationsModel.getDestinationsById(this.tripPoints[0].destination),
      }), this.pointsListComponent.getElement());
    }
  }
}
