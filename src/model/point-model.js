import { pointsMock } from '../mock/points';

export default class PointsModel {

  constructor() {
    this.pointsMock = [];
  }

  init() {
    this.points = pointsMock;
  }

  getPoints() {
    return this.points;
  }
}
