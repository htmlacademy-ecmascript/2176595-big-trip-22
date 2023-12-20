import dayjs from 'dayjs';

const MS_IN_DAY = 86400000;
const MS_IN_HOUR = 3600000;

const DATE_FORMAT = {
  dateMonth: 'D MMM',
  yearMonthDay: 'YYYY-MM-D',
  time: 'HH:mm',
  fullDate: 'DD/MM/YY HH:mm',
};

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

//приводит время к адекватному формату

function humanizePointDate(dueDate, dateFormat) {
  return dueDate ? dayjs(dueDate).format(dateFormat) : '';
}

//продолжительнось поездки

function calculateDuration(startDate, endDate) {
  const timeDuration = dayjs(endDate).diff(startDate);
  let timeFormat = 'DD[D] HH[H] mm[M]';
  if (timeDuration < MS_IN_DAY) {
    timeFormat = 'HH[H] mm[M]';
  }
  if (timeDuration < MS_IN_HOUR) {
    timeFormat = 'mm[M]';
  }
  return dayjs(timeDuration).format(timeFormat);
}

export { getRandomArrayElement, humanizePointDate, calculateDuration, DATE_FORMAT };
