import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Validations, AuthorizationStatus } from '../../const';
import { useInput } from '../../hooks/hooks';
import { useDispatch } from 'react-redux';
import { requireAuthorization } from '../../store/actions';
import { popupCloseHandler } from '../../utils';

const LoginForm = props => {
  const { setActive } = props;
  const [isError, setError] = useState(false);
  const [isView, setView] = useState(false);
  const name = useInput(``, Validations.IS_EMPTY);
  const password = useInput(``, Validations.IS_EMPTY);

  const dispatch = useDispatch();

  const resetForm = () => {
    name.setValue(``);
    password.setValue(``);
  };

  const formCloseHandler = () => {
    resetForm();
    popupCloseHandler(setActive);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (name.isEmpty || password.isEmpty) {
      setError(true);
    } else {
      setError(false);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      formCloseHandler();
    }
  };

  return (
    <div className="login-popup__container" onClick={evt => evt.stopPropagation()}>
      <div className="login-popup__header">
        <div className="login-popup__logo login-logo">
          <img
            src="./img/login-logo-icon.svg"
            alt="Лого"
            className="login-logo__image"
            width="30"
            height="27"
          />
          <div className="login-logo__title">
            <p className="login-logo__text">ЛИГА Банк</p>
            <p className="login-logo__small">интернет-банк</p>
          </div>
        </div>
        <button
          className="login-popup__btn button"
          type="button"
          aria-label="Закрыть"
          onClick={formCloseHandler}></button>
      </div>
      <form
        className="login-popup__form login-form"
        action="https://echo.htmlacademy.ru"
        method="post"
        onSubmit={handleSubmit}
        noValidate={true}>
        <label className="login-form__label">
          Логин
          <input
            autoFocus={true}
            aria-label="Логин"
            className={`login-form__field ${isError && name.isEmpty && `error`}`}
            type="text"
            name="name"
            required={true}
            value={name.value}
            onChange={evt => name.onChange(evt)}
            onBlur={evt => name.onBlur(evt)}
          />
          {name.isEmpty && (
            <span className={`login-form__errorText ${isError && name.isEmpty && `error`}`}>
              Пожалуйста, заполните поле
            </span>
          )}
        </label>

        <label className="login-form__label">
          Пароль
          <input
            aria-label="Пароль"
            className={`login-form__field ${isError && password.isEmpty && `error`}`}
            type={`${!isView ? `password` : `text`}`}
            name="password"
            required={true}
            value={password.value}
            onChange={evt => password.onChange(evt)}
            onBlur={evt => password.onBlur(evt)}
          />
          <button
            className="login-form__pass-btn button"
            aria-label="Посмотреть пароль"
            onClick={() => setView(!isView)}>
            <svg
              width="22"
              height="12"
              viewBox="0 0 22 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.29878 12L6.33638 11.4893L7.13618 8.59185C5.93899 8.16352 4.82634 7.5393 3.84654 6.7463L1.65854 8.86987L0.220528 7.47486L2.40955 5.35228C1.17386 3.91662 0.343585 2.19431 0 0.353927L2 0C2.77134 4.14262 6.50711 7.28557 11 7.28557C15.4919 7.28557 19.2287 4.14262 20 0L22 0.352941C21.6569 2.19358 20.827 3.91624 19.5915 5.35228L21.7795 7.47486L20.3415 8.86987L18.1535 6.7463C17.1737 7.5393 16.061 8.16352 14.8638 8.59185L15.6636 11.4903L13.7012 12L12.9004 9.10155C11.6426 9.31063 10.3574 9.31063 9.0996 9.10155L8.29878 12Z"
                fill="#1F1E25"
              />
            </svg>
          </button>
          {password.isEmpty && (
            <span className={`login-form__errorText ${isError && password.isEmpty && `error`}`}>
              Пожалуйста, заполните поле
            </span>
          )}
        </label>
        <Link to="#" className="login-form__link">
          Забыли пароль?
        </Link>
        <button className="login-form__submit button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  setActive: PropTypes.func.isRequired,
};

export default LoginForm;
