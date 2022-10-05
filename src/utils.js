import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';
import relativeTime from 'dayjs/plugin/relativeTime.js';

dayjs.extend(duration);
dayjs.extend(relativeTime);


const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomArrayElement = (elements) => elements [(getRandomInteger(0,elements.length - 1))];

const formatStringToDateWithTime = (date) =>
  dayjs(date).format('YYYY/MM/DD hh:mm');

const formatStringToDate = (date) =>
  dayjs(date).format('DD MM YYYY');

const formatStringToYear = (date) =>
  dayjs(date).format('YYYY');

const formatMinutesToTime = (minutes) =>
  dayjs.duration(minutes, 'minutes').format('H[h] mm[m]');

const generateNameList = (names) =>
  (names.length < 1)
    ? names[0]
    : names.join(', ');

const generateGenreTitle = (genres) =>
  (genres.length > 1)
    ? 'Genres'
    : 'Genre';

const generateGenreList = (genres) =>
  genres.map((genreItem) =>
    `<span class="film-details__genre">${genreItem}</span>`
  ).join('');

export {
  getRandomInteger,
  getRandomArrayElement,
  formatStringToDateWithTime,
  formatStringToDate,
  formatStringToYear,
  formatMinutesToTime,
  generateNameList,
  generateGenreTitle,
  generateGenreList
};
