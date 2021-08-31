import React from 'react';

const Tabs2 = () => {
  return (
    <div className="services__content tabs">
      <div className="container">
        <div className="tabs__wrapper">
          <div className="tabs__content">
            <h2 className="tabs__title">Лига Банк выдает кредиты<br/> под любые цели</h2>
            <p className="tabs__text">Ипотечный кредит</p>
            <p className="tabs__text">Автокредит</p>
            <p className="tabs__text">Потребительский кредит</p>
            <p className="tabs__offers">Рассчитайте ежемесячный платеж<br/>
              и ставку по кредиту воспользовавшись<br/> нашим <a href="#" className="tabs__link">кредитным калькулятором</a>
            </p>
          </div>
          <div className="tabs__image">
            <picture>
              <source media="(min-width: 1024px)" type="image/png" srcSet="./img/car-tab2.png"/>
              <source media="(min-width: 768px)" type="image/png" srcSet="./img/car-tab2-tablet.png"/>
              <img src="./img/car-tab2-mobile.png" alt="Картинка копилки" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs2;
