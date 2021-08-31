import { onMenuLinkClick } from '../../utils';

const Slide1 = () => {
  return (
    <div className="slider__content slide slide--first">
      <div className="container">
        <div className="slide__wrapper">
          <div className="slide__info">
            <h1 className="slide__title">Лига Банк</h1>
            <p className="slide__text">Кредиты на любой случай</p>
            <button
              className="slide__button button"
              data-goto=".page-main__loan"
              onClick={evt => onMenuLinkClick(evt)}>
              Рассчитать кредит
            </button>
          </div>
          <div className="slide__images">
            <picture>
              <source media="(min-width: 1024px)" type="image/png" srcSet="./img/white-card.png" />
              <source
                media="(min-width: 768px)"
                type="image/png"
                srcSet="./img/white-card-tablet.png"
              />
              <img
                src="./img/white-card.png"
                alt="Кредитная карта"
                className="slide__card slide__card--white"
              />
            </picture>
            <picture>
              <source media="(min-width: 1024px)" type="image/png" srcSet="./img/black-card.png" />
              <source
                media="(min-width: 768px)"
                type="image/png"
                srcSet="./img/black-card-tablet.png"
              />
              <img
                src="./img/black-card-mobile.png"
                alt="Кредитная карта"
                className="slide__card slide__card--black"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
