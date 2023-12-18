import { destinationsMock } from '../mock/destionations';


export default class DestinationsModel {

  constructor() {
    this.destinationsMock = [];
  }

  init() {
    this.destinations = destinationsMock;
  }

  getDestinations() {
    return this.destinations;
  }

  getDestinationsById(id) {
    return this.destinations.find((destination) => destination.id === id);
  }
}
