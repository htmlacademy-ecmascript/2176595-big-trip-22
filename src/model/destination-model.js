import { destinationsMock } from '../mock/destionations';


export default class DestinationsModel {
  #destinations = [];

  init() {
    this.#destinations = destinationsMock;
  }

  get destinations() {
    return this.#destinations;
  }

  getDestinationsById(id) {
    return this.#destinations.find((destination) => destination.id === id);
  }
}
