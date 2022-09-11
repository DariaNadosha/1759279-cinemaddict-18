import {createElement} from '../render.js';

const createNewFooterStatisticsTemplate = () => (
  `
    <p>0 movies inside</p>
  `
);

export default class FooterStatisticsView {
  getTemplate() {
    return createNewFooterStatisticsTemplate();
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