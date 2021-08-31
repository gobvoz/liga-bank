import { onMenuLinkClick } from '../../utils';

const Slide3 = () => {
  return (
    <div className="slider__content slide slide--third">
      <div className="container">
        <div className="slide__wrapper">
          <div className="slide__info">
            <h1 className="slide__title">Лига Банк</h1>
            <p className="slide__text">Всегда рядом</p>
            <a
              href="#contact-goto"
              className="slide__button button"
              onClick={evt => {
                onMenuLinkClick(evt);
              }}>
              Найти отделение
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
