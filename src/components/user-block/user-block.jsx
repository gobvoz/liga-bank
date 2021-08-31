import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { requireAuthorization } from '../../store/actions';
import LoginForm from '../login-form/login-form';
import PropTypes from 'prop-types';
import Popup from '../popup/popup';
import { popupOpenHandler } from '../../utils';

const UserBlock = props => {
  const { isMobile, isMenuOpen, setActive } = props;
  const { authorizationStatus } = useSelector(state => state.USER);

  const [loginActive, setLoginActive] = useState(false);

  const dispatch = useDispatch();

  const onUserClickHandler = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    } else if (isMenuOpen) {
      document.body.classList.remove(`_lock`);
      setActive(!isMenuOpen);
    } else {
      popupOpenHandler(setLoginActive);
    }
  };

  const LoginIcon = () => {
    if (isMobile) {
      return (
        <img
          src="./img/login-icon.svg"
          alt="Иконка входа"
          className="user-block__icon"
          width="20"
          height="22"
        />
      );
    } else if (isMenuOpen) {
      return (
        <button
          className="user-block__btn login-popup__btn button"
          type="button"
          aria-label="Закрыть"></button>
      );
    } else {
      return (
        <picture>
          <source media="(min-width: 768px)" type="image/svg+xml" srcSet="./img/login-icon.svg" />
          <img src="./img/login-icon-mobile.svg" alt="Иконка входа" className="user-block__icon" />
        </picture>
      );
    }
  };

  return (
    <>
      <div className="user-block" onClick={onUserClickHandler}>
        <LoginIcon />
        {authorizationStatus === AuthorizationStatus.NO_AUTH ? (
          <p className="user-block__text">Войти в Интернет-банк</p>
        ) : (
          <p className="user-block__text">Выйти из Интернет-банка</p>
        )}
      </div>
      {loginActive && (
        <Popup name={`login`} active={loginActive} setActive={setLoginActive}>
          <LoginForm setActive={setLoginActive} />
        </Popup>
      )}
    </>
  );
};

UserBlock.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default UserBlock;
