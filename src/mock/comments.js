import dayjs from 'dayjs';
import {getRandomInteger, getRandomArrayElement} from '../utils.js';
import {
  DaysDuration,
  names,
  surnames,
  emojis,
  comment,
} from './const.js';

const generateComment = () => ({
  author: `${getRandomArrayElement(names)} ${getRandomArrayElement(surnames)}`,
  comment,
  date: dayjs().subtract(getRandomInteger(DaysDuration.MIN, DaysDuration.MAX), 'day').toISOString(),
  emotion: getRandomArrayElement(emojis),
});

const getCommentCount = (films) => films.reduce((count, film) => count + film.comments.length, 0);

const generateComments = (films) => {
  const commentCount = getCommentCount(films);

  return Array.from({length: commentCount}, (_value, index) => {
    const commentItem = generateComment();

    return {
      id: String(index + 1),
      commentItem,
    };
  });
};

export {generateComments};
