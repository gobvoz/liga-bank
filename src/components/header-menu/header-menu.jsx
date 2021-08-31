import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MenuType, AppRoute } from '../../const';
import { changeMenu, redirectToRoute } from '../../store/actions';
import UserBlock from '../user-block/user-block';
import PropTypes from 'prop-types';
import { onMenuLinkClick } from '../../utils';

const HeaderMenu = props => {
  const { menuType } = useSelector(state => state.DATA);
  const { isActive, setActive } = props;

  const dispatch = useDispatch();

  let servicesActiveLink = ``;
  let loanActiveLink = ``;
  let converterActiveLink = ``;
  let contactActiveLink = ``;

  switch (menuType) {
    case MenuType.SERVICES:
      servicesActiveLink = `page-menu__link--active`;
      loanActiveLink = ``;
      converterActiveLink = ``;
      contactActiveLink = ``;
      break;
    case MenuType.LOAN:
      servicesActiveLink = ``;
      loanActiveLink = `page-menu__link--active`;
      converterActiveLink = ``;
      contactActiveLink = ``;
      break;
    case MenuType.CONVERTER:
      servicesActiveLink = ``;
      loanActiveLink = ``;
      converterActiveLink = `page-menu__link--active`;
      contactActiveLink = ``;
      break;
    case MenuType.CONTACT:
      servicesActiveLink = ``;
      loanActiveLink = ``;
      converterActiveLink = ``;
      contactActiveLink = `page-menu__link--active`;
      break;
    default:
  }

  const openMenuHandler = () => {
    document.body.classList.add(`_lock`);
    setActive(true);
  };

  useEffect(() => {
    if (menuType !== MenuType.CONVERTER) {
      onMenuLinkClick(menuType);
    }
  }, [menuType]);

  return (
    <nav className={`page-menu ${isActive && `active`}`}>
      <div className="page-menu__button" onClick={openMenuHandler}>
        <span className="page-menu__icon"></span>
      </div>
      <ul className="page-menu__list">
        <li className="page-menu__item">
          <a
            href="#"
            className={`page-menu__link ${servicesActiveLink}`}
            onClick={evt => {
              evt.preventDefault();
              dispatch(redirectToRoute(AppRoute.ROOT));
              dispatch(changeMenu(MenuType.SERVICES));
            }}>
            Услуги
          </a>
        </li>
        <li className="page-menu__item">
          <a
            href="#"
            className={`page-menu__link ${loanActiveLink}`}
            onClick={evt => {
              evt.preventDefault();
              dispatch(redirectToRoute(AppRoute.ROOT));
              dispatch(changeMenu(MenuType.LOAN));
            }}>
            Рассчитать кредит
          </a>
        </li>
        <li className="page-menu__item">
          <Link
            to={AppRoute.CONVERTER}
            className={`page-menu__link ${converterActiveLink}`}
            onClick={() => {
              dispatch(changeMenu(MenuType.CONVERTER));
            }}>
            Конвертер валют
          </Link>
        </li>
        <li className="page-menu__item">
          <a
            href="#"
            className={`page-menu__link ${contactActiveLink}`}
            onClick={evt => {
              evt.preventDefault();
              dispatch(redirectToRoute(AppRoute.ROOT));
              dispatch(changeMenu(MenuType.CONTACT));
            }}>
            Контакты
          </a>
        </li>
        <li className="page-menu__item user-item">
          <UserBlock isMobile={true} isMenuOpen={false} setActive={() => {}} />
        </li>
      </ul>
    </nav>
  );
};

HeaderMenu.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default HeaderMenu;
