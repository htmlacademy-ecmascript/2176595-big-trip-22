import { pointsMock } from '../mock/points';

export default class PointsModel {
  #points = [];

  init() {
    this.spoints = pointsMock;
  }

  get points() {
    return this.#points;
  }
}
