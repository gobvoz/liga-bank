import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MENU_TYPE, AppRoute } from '../../const';
import { changeMenu } from '../../store/actions';
import UserBlock from '../user-block/user-block';
import PropTypes from 'prop-types';

const HeaderMenu = props => {
  const { menuType } = useSelector(state => state.DATA);
  const { isActive, setActive } = props;

  const dispatch = useDispatch();

  let servicesActiveLink = ``;
  let loanActiveLink = ``;
  let converterActiveLink = ``;
  let contactActiveLink = ``;

  switch (menuType) {
    case MENU_TYPE.SERVICES:
      servicesActiveLink = `page-menu__link--active`;
      loanActiveLink = ``;
      converterActiveLink = ``;
      contactActiveLink = ``;
      break;
    case MENU_TYPE.LOAN:
      servicesActiveLink = ``;
      loanActiveLink = `page-menu__link--active`;
      converterActiveLink = ``;
      contactActiveLink = ``;
      break;
    case MENU_TYPE.CONVERTER:
      servicesActiveLink = ``;
      loanActiveLink = ``;
      converterActiveLink = `page-menu__link--active`;
      contactActiveLink = ``;
      break;
    case MENU_TYPE.CONTACT:
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

  return (
    <nav className={`page-menu ${isActive && `active`}`}>
      <div className="page-menu__button" onClick={openMenuHandler}>
        <span className="page-menu__icon"></span>
      </div>
      <ul className="page-menu__list">
        <li className="page-menu__item">
          <Link
            to={AppRoute.ROOT}
            className={`page-menu__link ${servicesActiveLink}`}
            onClick={() => {
              dispatch(changeMenu(MENU_TYPE.SERVICES));
            }}>
            Услуги
          </Link>
        </li>
        <li className="page-menu__item">
          <Link
            to={AppRoute.ROOT}
            className={`page-menu__link ${loanActiveLink}`}
            onClick={() => {
              dispatch(changeMenu(MENU_TYPE.LOAN));
            }}>
            Рассчитать кредит
          </Link>
        </li>
        <li className="page-menu__item">
          <Link
            to={AppRoute.CONVERTER}
            className={`page-menu__link ${converterActiveLink}`}
            onClick={() => {
              dispatch(changeMenu(MENU_TYPE.CONVERTER));
            }}>
            Конвертер валют
          </Link>
        </li>
        <li className="page-menu__item">
          <Link
            to={AppRoute.ROOT}
            className={`page-menu__link ${contactActiveLink}`}
            onClick={() => {
              dispatch(changeMenu(MENU_TYPE.CONTACT));
            }}>
            Контакты
          </Link>
        </li>
        <li className="page-menu__item user-item">
          <UserBlock isMobile={true} isMenuOpen={isActive} setActive={setActive} />
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
