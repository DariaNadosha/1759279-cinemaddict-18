

export default class FilmsModel {

  constructor(filmsData) {
    this.filmsData = filmsData;
  }

  get films() {
    return this.filmsData;
  }

}
