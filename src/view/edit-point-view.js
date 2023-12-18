import {createElement} from '../render.js';
import { EVENT_TYPES } from '../const.js';
import { humanizeTaskDueDate } from '../util.js';

function createOfferTypeTemplate(id, type) {
  return(`
  <div class="event__type-item">
  <input id="event-type-${type}-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
  <label class="event__type-label  event__type-label--${type}}" for="event-type-${type}}-${id}">Restaurant</label>
</div>
  `);
}


function createOfferTemplate(offers, checkedOffers) {
  const {id, title, price} = offers;
  const isChecked = checkedOffers.map((item) => item.id).includes(id) ? 'checked' : '';

  return (
    `<div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id=${id} type="checkbox" name="event-offer-luggage" ${isChecked}>
  <label class="event__offer-label" for="event-offer-luggage-${id}">
    <span class="event__offer-title">${title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${price}</span>
  </label>
</div>`
  );
}

function createOfferListTemplate(offers, checkedOffers) {
  if (offers.length !== 0) {
    return (
      `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
        ${offers.map((offer) => createOfferTemplate(offer, checkedOffers)).join('')}

         </div>
      </section>`
    );
  }

  return ('');
}

function createPhotoTemplate(photo) {
  const { src, description } = photo;
  return (
    `<img class="event__photo" src=${src} alt=${description}>
    `);
}

function createPhotoContainerTemplate(pictures) {
  if(pictures.length > 0) {
    return(`
    <div class="event__photos-container">
            <div class="event__photos-tape">
             ${pictures.map((item) => createPhotoTemplate(item)).join('')}
            </div>
          </div>
    `);
  }
  return '';
}

function createDestinationsTemplate(destinations) {
  const { description, pictures } = destinations;
  if(description > 0 || pictures.length > 0) {
    return (`
    <section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${description}</p>
            ${createPhotoContainerTemplate(pictures)}
          </section>

    `);
  }
  return '';
}

function createEditPointTemplate(points, offers, destinations, checkedOffers) {
  const { type, dateFrom, dateTo, basePrice } = points;
  const { name,id } = destinations;


  return (
    ` <li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">
          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${EVENT_TYPES.map((item) => createOfferTypeTemplate(item).join(''))}
            </fieldset>
          </div>
        </div>
        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-${id}">
            ${type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value="${name}" list="destination-list-${id}">
          <datalist id="destination-list-${id}">
            <option value="Amsterdam"></option>
            <option value="Geneva"></option>
            <option value="Chamonix"></option>
          </datalist>
        </div>
        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-${id}">From</label>
          <input class="event__input  event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value=${humanizeTaskDueDate(dateFrom)}>
          &mdash;
          <label class="visually-hidden" for="event-end-time-${id}">To</label>
          <input class="event__input  event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value=${humanizeTaskDueDate(dateTo)}">
        </div>
        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-${id}">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-${id}" type="text" name="event-price" value="${basePrice}>
        </div>
        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
       ${createOfferListTemplate(offers, checkedOffers)}
       ${createDestinationsTemplate(destinations)}
      </section>
    </form>
  </li>`
  );
}

export default class EditPointView {

  constructor({ DestinationsModel, OffersModel, PointsModel, checkedOffers }) {
    this.destinations = DestinationsModel;
    this.offers = OffersModel;
    this.points = PointsModel;
    this.checkedOffers = checkedOffers;
  }

  getTemplate() {
    return createEditPointTemplate(this.points, this.destinations, this.offers);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
