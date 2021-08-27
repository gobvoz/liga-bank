const Tabs3 = () => {
  return (
    <div className="services__content tabs">
      <div className="container">
        <div className="tabs__wrapper">
          <div className="tabs__content">
            <h2 className="tabs__title">
              Лига Страхование — застрахуем
              <br /> все что захотите
            </h2>
            <p className="tabs__text">Автомобильное страхование</p>
            <p className="tabs__text">Страхование жизни и здоровья</p>
            <p className="tabs__text">Страхование недвижимости</p>
            <button className="tabs__button button">Узнать подробнее</button>
          </div>
          <div className="tabs__image">
            <picture>
              <source media="(min-width: 1024px)" type="image/png" srcSet="./img/lock-tab3.png" />
              <source
                media="(min-width: 768px)"
                type="image/png"
                srcSet="./img/lock-tab3-tablet.png"
              />
              <img src="./img/lock-tab3-mobile.png" alt="Картинка копилки" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs3;
