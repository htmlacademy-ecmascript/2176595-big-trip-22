import { offersMock } from '../mock/offers';

export default class OffersModel {

  constructor() {
    this.offersMock = [];
  }

  init() {
    this.points = offersMock;
  }

  getOffers() {
    return this.offers;
  }

  getOffersByType(type) {
    return this.offers.find((offer) => offer.type === type).offers;
  }

  // getOffersById(type, itemsId) {
  //   const offersType = this.getOffersByType(type);

  //   return offersType.offers.filter((item) => itemsId.find((id) => item.id) === id);
  // }
}
