import { Link } from 'react-router-dom';
import { AppRoute, MENU_TYPE } from '../../const';
import { changeMenu } from '../../store/actions';
import { useDispatch } from 'react-redux';

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <footer className="page-footer">
      <div className="container">
        <div className="page-footer__wrapper">
          <div className="page-footer__left">
            <div className="page-footer__logo logo">
              <Link
                to="/"
                className="logo__link"
                onClick={() => {
                  dispatch(changeMenu(MENU_TYPE.SERVICES));
                }}>
                <div className="logo__wrapper">
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      type="image/svg+xml"
                      srcSet="./img/logo-icon.svg"
                    />
                    <img className="logo__image" src="./img/logo-icon-mobile.svg" alt="Лого" />
                  </picture>
                  <p className="logo__text">ЛИГА Банк</p>
                </div>
              </Link>
            </div>
            <div className="page-footer__menu">
              <ul className="page-footer__list">
                <li className="page-footer__item">
                  <Link to={AppRoute.ROOT} className="page-footer__link">
                    Услуги
                  </Link>
                </li>
                <li className="page-footer__item">
                  <Link to={AppRoute.ROOT} className="page-footer__link">
                    Рассчитать&nbsp;кредит
                  </Link>
                </li>
                <li className="page-footer__item">
                  <Link to={AppRoute.ROOT} className="page-footer__link">
                    Контакты
                  </Link>
                </li>
                <li className="page-footer__item">
                  <Link to={AppRoute.QUESTIONS} className="page-footer__link">
                    Задать вопрос
                  </Link>
                </li>
              </ul>
            </div>
            <div className="page-footer__address address">
              <p className="address__text">
                150015, г. Москва, ул. Московская, д. 32
                <br />
                Генеральная&nbsp;лицензия&nbsp;Банка&nbsp;России&nbsp;№1050
                <br />Ⓒ Лига Банк, 2019
              </p>
            </div>
          </div>
          <div className="page-footer__right">
            <div className="page-footer__cellphone phone">
              <p className="phone__number">
                <a href="tel:*0904" className="phone__link">
                  *0904
                </a>
              </p>
              <p className="phone__info">
                Бесплатно для абонентов
                <br /> МТС,&nbsp;Билайн,&nbsp;Мегафон,&nbsp;Теле2
              </p>
            </div>
            <div className="page-footer__phone phone">
              <p className="phone__number">
                <a href="tel:8 800 111 22 33" className="phone__link">
                  8 800 111 22 33
                </a>
              </p>
              <p className="phone__info">
                Бесплатный&nbsp;для&nbsp;всех
                <br /> городов России
              </p>
            </div>
            <div className="page-footer__social social">
              <ul className="social__list">
                <li className="social__item">
                  <a
                    href="https://ru-ru.facebook.com"
                    className="social__link"
                    target="_blank"
                    rel="noreferrer">
                    <img
                      src="./img/fb-icon.svg"
                      alt="Facebook"
                      className="social__icon"
                      width="9"
                      height="16"
                    />
                  </a>
                </li>
                <li className="social__item">
                  <a
                    href="https://www.instagram.com"
                    className="social__link"
                    target="_blank"
                    rel="noreferrer">
                    <img
                      src="./img/inst-icon.svg"
                      alt="Instagram"
                      className="social__icon"
                      width="16"
                      height="16"
                    />
                  </a>
                </li>
                <li className="social__item">
                  <a
                    href="https://twitter.com"
                    className="social__link"
                    target="_blank"
                    rel="noreferrer">
                    <img
                      src="./img/twitter-icon.svg"
                      alt="Twitter"
                      className="social__icon"
                      width="16"
                      height="13"
                    />
                  </a>
                </li>
                <li className="social__item">
                  <a
                    href="https://www.youtube.com"
                    className="social__link"
                    target="_blank"
                    rel="noreferrer">
                    <img
                      src="./img/youtube-icon.svg"
                      alt="Youtube"
                      className="social__icon"
                      width="16"
                      height="13"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
