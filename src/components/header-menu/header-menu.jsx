import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MENU_TYPE, AppRoute } from '../../const';
import { changeMenu } from '../../store/actions';

const HeaderMenu = () => {
  const { menuType } = useSelector(state => state.DATA);

  const dispatch = useDispatch();

  let servicesActiveLink = ``;
  let loanActiveLink = ``;
  let converterActiveLink = ``;
  let contactActiveLink = ``;
  let questionsActiveLink = ``;

  switch (menuType) {
    case MENU_TYPE.SERVICES:
      servicesActiveLink = `page-menu__link--active`;
      loanActiveLink = ``;
      converterActiveLink = ``;
      contactActiveLink = ``;
      questionsActiveLink = ``;
      break;
    case MENU_TYPE.LOAN:
      servicesActiveLink = ``;
      loanActiveLink = `page-menu__link--active`;
      converterActiveLink = ``;
      contactActiveLink = ``;
      questionsActiveLink = ``;
      break;
    case MENU_TYPE.CONVERTER:
      servicesActiveLink = ``;
      loanActiveLink = ``;
      converterActiveLink = `page-menu__link--active`;
      contactActiveLink = ``;
      questionsActiveLink = ``;
      break;
    case MENU_TYPE.CONTACT:
      servicesActiveLink = ``;
      loanActiveLink = ``;
      converterActiveLink = ``;
      contactActiveLink = `page-menu__link--active`;
      questionsActiveLink = ``;
      break;
    default:
      servicesActiveLink = ``;
      loanActiveLink = ``;
      converterActiveLink = ``;
      contactActiveLink = `page-menu__link--active`;
      questionsActiveLink = ``;
      break;
  }

  return (
    <nav className="page-menu">
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
      </ul>
    </nav>
  );
};

export default HeaderMenu;
