import { useState } from 'react';
import PropTypes from 'prop-types';
import { useInput } from '../../../hooks/hooks';
import { Validations } from '../../../const';
import { useSelector } from 'react-redux';

const Step3 = props => {
  const { setActive, openPopup } = props;
  const { offer } = useSelector(state => state.DATA);
  const [isError, setError] = useState(false);
  const name = useInput(``, Validations.IS_EMPTY);
  const phone = useInput(``, Validations.IS_EMPTY);
  const mail = useInput(``, Validations.IS_EMPTY);

  const resetForm = () => {
    name.setValue(``);
    phone.setValue(``);
    mail.setValue(``);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (name.isEmpty || phone.isEmpty || mail.isEmpty) {
      setError(true);
    } else {
      setError(false);
      resetForm();
      setActive(false);
      openPopup(true);
    }
  };

  return (
    <div className="loan-calculator__step3 step step3">
      <h3 className="step3__title">Шаг 3. Оформление заявки</h3>
      <ul className="step3__list">
        <li className="step3__item">
          <span className="step3__name">Номер заявки</span>
          <span className="step3__data">{`№ ${String(`0000` + offer.id).slice(-4)}`}</span>
        </li>
        <li className="step3__item">
          <span className="step3__name">Цель кредита</span>
          <span className="step3__data">{offer.loanPurpose}</span>
        </li>
        <li className="step3__item">
          <span className="step3__name">Стоимость недвижимости</span>
          <span className="step3__data">{`${offer.loanPrice.toLocaleString(`ru-RU`)} рублей`}</span>
        </li>
        <li className="step3__item">
          <span className="step3__name">Первоначальный взнос</span>
          <span className="step3__data">{`${offer.loanFirstPayment.toLocaleString(
            `ru-RU`,
          )} рублей`}</span>
        </li>
        <li className="step3__item">
          <span className="step3__name">Срок кредитования</span>
          <span className="step3__data">{`${offer.loanTime.toLocaleString(`ru-RU`)} лет`}</span>
        </li>
      </ul>
      <form
        className="step3__input-wrapper"
        action="https://echo.htmlacademy.ru"
        noValidate={true}
        onSubmit={handleSubmit}>
        <label className="step3__label">
          <input
            autoFocus={true}
            aria-label="Имя"
            className={`step3__field name-field ${isError && name.isEmpty && `error`}`}
            type="text"
            name="name-id"
            placeholder="ФИО"
            required={true}
            value={name.value}
            onChange={evt => name.onChange(evt)}
            onBlur={evt => name.onBlur(evt)}
          />
          {name.isEmpty && (
            <span className={`step3__errorText ${isError && `error`}`}>
              Пожалуйста, заполните поле
            </span>
          )}
        </label>
        <label className="step3__label">
          <input
            aria-label="Телефон"
            className={`step3__field phone-field ${isError && phone.isEmpty && `error`}`}
            type="tel"
            name="phone-id"
            placeholder="Телефон"
            required={true}
            value={phone.value}
            onChange={evt => phone.onChange(evt)}
            onBlur={evt => phone.onBlur(evt)}
          />
          {phone.isEmpty && (
            <span className={`step3__errorText ${isError && `error`}`}>
              Пожалуйста, заполните поле
            </span>
          )}
        </label>
        <label className="step3__label">
          <input
            aria-label="E-mail"
            className={`step3__field mail-field ${isError && mail.isEmpty && `error`}`}
            type="email"
            name="mail-id"
            placeholder="E-mail"
            required={true}
            value={mail.value}
            onChange={evt => mail.onChange(evt)}
            onBlur={evt => mail.onBlur(evt)}
          />
          {mail.isEmpty && (
            <span className={`step3__errorText ${isError && `error`}`}>
              Пожалуйста, заполните поле
            </span>
          )}
        </label>
        <button className="step3__submit button" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};

Step3.propTypes = {
  setActive: PropTypes.func.isRequired,
  openPopup: PropTypes.func.isRequired,
};

export default Step3;
