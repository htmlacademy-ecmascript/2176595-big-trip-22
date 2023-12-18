import dayjs from 'dayjs';

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

function humanizeTaskDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

//продолжительнось поездки

function calculateDuration(startDate, endDate) {
  return dayjs(endDate).diff(startDate, 'mm');
}

export { getRandomArrayElement, humanizeTaskDueDate, calculateDuration, DATE_FORMAT };
