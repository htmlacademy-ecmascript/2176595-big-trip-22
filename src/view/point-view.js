import { createElement } from '../render.js';
import { DATE_FORMAT, humanizePointDate } from '../util.js';
import { calculateDuration } from '../util.js';

function createOfferTemplate(offers) {
  const { title, price } = offers;

  return(`
  <li class="event__offer">
  <span class="event__offer-title">${title}r</span>
  &plus;&euro;&nbsp;
  <span class="event__offer-price">${price}</span>
</li>
  `);
}

function createPointTemplate({point, offers, destination}) {
  const { type, dateFrom, dateTo, isFavorite, basePrice } = point;
  const { name } = destination;

  return (
    `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="2019-03-18">${humanizePointDate(dateFrom, DATE_FORMAT.dateMonth)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="02019-03-18T10:3">${humanizePointDate(dateFrom, DATE_FORMAT.time)}</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-18T11:00">${humanizePointDate(dateTo, DATE_FORMAT.time)}</time>
        </p>
        <p class="event__duration">${calculateDuration(dateFrom, dateTo)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
       ${offers.map((offer) => createOfferTemplate(offer)).join('')}
      </ul>
      <button class="${ isFavorite ? 'event__favorite-btn event__favorite-btn--active' : 'event__favorite-btn'}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
}

export default class PointView {

  constructor({ destination, offers, point }) {
    this.destination = destination;
    this.offers = offers;
    this.point = point;
  }

  getTemplate() {
    return createPointTemplate({
      destination: this.destination,
      offers: this.offers,
      point: this.point,
    });
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
