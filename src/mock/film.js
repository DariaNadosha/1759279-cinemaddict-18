// import dayjs from 'dayjs';
import {getRandomInteger, getRandomArrayElement} from '../utils.js';
import {FILM_COUNT} from '../const.js';
import {
  Rating, AgeRating, RunTime, GenreCount, NAME_COUNT,
  MAX_COMMENTS_IN_FILM, posters, title, names, surnames, genres, description, countries, YearsDuration
} from '../mock/const.js';
import dayjs from 'dayjs';

const generateFilm = () => ({
  title: getRandomArrayElement(title),
  alternativeTitle: getRandomArrayElement(title),
  totalRating: getRandomInteger(Rating.MIN, Rating.MAX),
  poster: getRandomArrayElement(posters),
  ageRating: getRandomInteger(AgeRating.MIN, AgeRating.MAX),
  director : `${getRandomArrayElement(names)} ${getRandomArrayElement(surnames)}`,
  writers: Array.from({length: NAME_COUNT}, () => `${getRandomArrayElement(names)} ${getRandomArrayElement(surnames)}`),
  actors: Array.from({length: NAME_COUNT}, () => `${getRandomArrayElement(names)} ${getRandomArrayElement(surnames)}`),
  release: {
    date: dayjs().subtract(getRandomInteger(YearsDuration.MIN, YearsDuration.MAX), 'year').toISOString(),
    releaseCountry: getRandomArrayElement(countries),
  },
  runtime: getRandomInteger(RunTime.MIN, RunTime.MAX),
  genre: Array.from({length: getRandomInteger(GenreCount.MIN, GenreCount.MAX)}, () => getRandomArrayElement(genres)),
  description,
});

const generateFilms = () => {
  const films = Array.from({length: FILM_COUNT}, generateFilm);

  let totalCommentsCount = 0;

  return films.map((film, index) => {
    const hasComments = getRandomInteger(0, 1);

    const filmCommentsCount = (hasComments) ? getRandomInteger(1, MAX_COMMENTS_IN_FILM) : 0;

    totalCommentsCount += filmCommentsCount;

    return {
      id: String(index + 1),
      comments: (hasComments) ? Array.from({length: filmCommentsCount},
        (_value, commentIndex) => String(totalCommentsCount - commentIndex)) : [],
      filmInfo: film,
    };
  });
};


export {generateFilm, generateFilms};
