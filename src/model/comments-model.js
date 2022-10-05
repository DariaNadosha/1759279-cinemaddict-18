import {generateComments} from '../mock/comments';

export default class CommentsModel {
  filmsModel = null;
  allComents = [];
  comments = [];

  constructor(filmsModel) {
    this.filmsModel = filmsModel;
    this.generateAllComments();
  }

  generateAllComments() {
    this.allComents = generateComments(this.filmsModel.films);
  }

  get = (film) => {
    this.comments = film.comments.map((commentId) =>
      this.allComents.find((comment) =>
        comment.id === commentId)
    );

    return this.comments;
  };
}

