import {createElement} from '../render.js';

const createNewFooterStatisticsTemplate = () => (
  `
  <section class="footer__statistics">
    <p>0 movies inside</p>
  </section>
`
);

export default class NewFooterStatisticsView {
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
