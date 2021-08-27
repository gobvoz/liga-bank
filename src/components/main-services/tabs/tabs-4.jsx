const Tabs4 = () => {
  return (
    <div className="services__content tabs">
      <div className="container">
        <div className="tabs__wrapper">
          <div className="tabs__content">
            <h2 className="tabs__title">
              Лига Банк — это огромное количество онлайн-сервисов для&nbsp;вашего удобства
            </h2>
            <p className="tabs__text">
              Мобильный банк,
              <br /> который всегда под рукой
            </p>
            <p className="tabs__text">
              Приложение Лига-проездной позволит вам оплачивать билеты&nbsp;по всему миру
            </p>
            <button className="tabs__button button">Узнать подробнее</button>
          </div>
          <div className="tabs__image">
            <picture>
              <source media="(min-width: 1024px)" type="image/png" srcSet="./img/phone-tab4.png" />
              <source
                media="(min-width: 768px)"
                type="image/png"
                srcSet="./img/phone-tab4-tablet.png"
              />
              <img src="./img/phone-tab4-mobile.png" alt="Картинка копилки" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs4;
