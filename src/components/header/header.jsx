import HeaderMenu from '../header-menu/header-menu';
import UserBlock from '../user-block/user-block';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeMenu } from '../../store/actions';
import { MENU_TYPE } from '../../const';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="page-header">
      <div className="container">
        <div className="page-header__wrapper">
          <div className="page-header__logo logo">
            <Link
              to="/"
              className="logo__link"
              onClick={() => {
                dispatch(changeMenu(MENU_TYPE.SERVICES));
              }}>
              <div className="logo__wrapper">
                <img
                  src="./img/logo-icon.svg"
                  alt="Лого"
                  className="logo__image"
                  width="28"
                  height="25"
                />
                <p className="logo__text">ЛИГА Банк</p>
              </div>
            </Link>
          </div>
          <HeaderMenu />
          <UserBlock />
        </div>
      </div>
    </header>
  );
};

export default Header;
