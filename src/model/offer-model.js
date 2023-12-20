import { offersMock } from '../mock/offers';

export default class OffersModel {

  constructor() {
    this.offersMock = [];
  }

  init() {
    this.offers = offersMock;
  }

  getOffers() {
    return this.offers;
  }

  getOffersByType(type) {
    return this.offers.find((offer) => offer.type === type).offers;
  }

  getOffersById(type, itemIds) {
    const offersType = this.getOffersByType(type);

    return offersType.filter((item) => itemIds.includes(item.id));
  }
}
