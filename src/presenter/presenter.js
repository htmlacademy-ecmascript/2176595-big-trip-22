import { render } from '../render.js';
import EventItems from '../view/event-list-view.js';
import SortForm from '../view/sort-view.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';


export default class TripPresenter {
  pointsLIstComponent = new EventItems();

  constructor({pointsContainer}) {
    this.pointsContainer = pointsContainer;
  }

  init() {
    render(this.pointsLIstComponent, this.pointsContainer);
    render(new SortForm(), this.pointsLIstComponent.getElement());
    render(new EditPointView(), this.pointsLIstComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.pointsLIstComponent.getElement());
    }
  }
}
