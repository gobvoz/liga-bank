import { redirectToRoute } from '../../../store/actions';
import { useDispatch } from 'react-redux';
import { AppRoute } from '../../../const';

const Tabs1 = () => {
  const dispatch = useDispatch();

  return (
    <div className="services__content tabs">
      <div className="container">
        <div className="tabs__wrapper">
          <div className="tabs__content">
            <h2 className="tabs__title">
              Вклады Лига Банка – это выгодная
              <br /> инвестиция в свое будущее
            </h2>
            <p className="tabs__text">Проценты по вкладам до 7%</p>
            <p className="tabs__text">Разнообразные условия</p>
            <p className="tabs__text">
              Возможность ежемесячной капитализации или вывод процентов на банковскую карту
            </p>
            <button
              className="tabs__button button"
              onClick={() => {
                dispatch(redirectToRoute(AppRoute.DEPOSIT));
              }}>
              Узнать подробнее
            </button>
          </div>
          <div className="tabs__image">
            <picture>
              <source media="(min-width: 1024px)" type="image/png" srcSet="./img/piggy-tab1.png" />
              <source
                media="(min-width: 768px)"
                type="image/png"
                srcSet="./img/piggy-tab1-tablet.png"
              />
              <img src="./img/piggy-tab1-mobile.png" alt="Картинка копилки" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs1;
