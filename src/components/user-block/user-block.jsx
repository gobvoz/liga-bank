import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { requireAuthorization } from '../../store/actions';
import LoginForm from '../login-form/login-form';

const UserBlock = () => {
  const { authorizationStatus } = useSelector(state => state.USER);

  const [loginActive, setLoginActive] = useState(false);

  const dispatch = useDispatch();

  const onUserClickHandler = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    } else {
      onLoginOpenHandler();
    }
  };

  const onLoginOpenHandler = () => {
    const scrollY = window.pageYOffset;
    const screenWidth = document.body.clientWidth;
    document.body.style.position = `fixed`;
    document.body.style.minWidth = `${screenWidth}px`;
    document.body.style.top = `-${scrollY}px`;
    setLoginActive(true);
  };

  return (
    <React.Fragment>
      <div className="user-block" onClick={onUserClickHandler}>
        <img
          src="./img/login-icon.svg"
          alt="Иконка входа"
          className="user-block__icon"
          width="20"
          height="22"
        />
        {authorizationStatus === AuthorizationStatus.NO_AUTH ? (
          <p className="user-block__text">Войти в Интернет-банк</p>
        ) : (
          <p className="user-block__text">Выйти из Интернет-банка</p>
        )}
      </div>
      {loginActive && <LoginForm active={loginActive} setActive={setLoginActive} />}
    </React.Fragment>
  );
};

export default UserBlock;
