import { useState } from 'react';
import PropTypes from 'prop-types';
import { useInput } from '../../../hooks/hooks';
import { LoanPurpose, Validation } from '../../../const';
import { useDispatch, useSelector } from 'react-redux';
import { changeOfferNumber } from '../../../store/actions';
import { completePopupOpen } from '../../../utils';

const Step3 = props => {
  const { setActive, openPopup } = props;
  const { purpose, offer } = useSelector(state => state.DATA);
  const [isError, setError] = useState(false);
  const name = useInput(
    localStorage.getItem(`name`) ? localStorage.getItem(`name`) : ``,
    Validation.IS_EMPTY,
  );
  const phone = useInput(
    localStorage.getItem(`phone`) ? localStorage.getItem(`phone`) : ``,
    Validation.IS_EMPTY,
  );
  const mail = useInput(
    localStorage.getItem(`mail`) ? localStorage.getItem(`mail`) : ``,
    Validation.IS_EMAIL,
  );

  const dispatch = useDispatch();

  const resetForm = () => {
    name.setValue(``);
    phone.setValue(``);
    mail.setValue(``);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (name.isEmpty || phone.isEmpty || mail.isEmpty || mail.emailError) {
      setError(true);
    } else {
      dispatch(changeOfferNumber(offer.id));
      setError(false);
      localStorage.setItem(`name`, name.value);
      localStorage.setItem(`phone`, phone.value);
      localStorage.setItem(`mail`, mail.value);
      resetForm();
      setActive(false);
      completePopupOpen(openPopup);
    }
  };

  const onInputPhone = evt => {
    if (
      !(
        evt.key === `ArrowLeft` ||
        evt.key === `ArrowRight` ||
        evt.key === `Backspace` ||
        evt.key === `Tab` ||
        evt.key === `Delete`
      )
    ) {
      evt.preventDefault();
    }

    const mask = `+7 (111) 111-11-11`;

    if (/[0-9\+\ \-\(\)]/.test(evt.key)) {
      let currentString = phone.value;
      const currentLength = currentString.length;
      if (/[0-9]/.test(evt.key)) {
        if (mask[currentLength] === `1`) {
          phone.setValue(currentString + evt.key);
        } else {
          for (let i = currentLength; i < mask.length; i++) {
            if (mask[i] === `1`) {
              phone.setValue(currentString + evt.key);
              break;
            }
            currentString += mask[i];
          }
        }
      }
    }
  };

  return (
    <div className="loan-calculator__step3 step step3">
      <h3 className="step3__title">?????? 3. ???????????????????? ????????????</h3>
      <ul className="step3__list">
        <li className="step3__item">
          <span className="step3__name">?????????? ????????????</span>
          <span className="step3__data">{`??? ${String(`0000` + offer.id).slice(-4)}`}</span>
        </li>
        <li className="step3__item">
          <span className="step3__name">???????? ??????????????</span>
          <span className="step3__data">
            {purpose === LoanPurpose.MORTGAGE ? `??????????????` : `????????????????????`}
          </span>
        </li>
        <li className="step3__item">
          <span className="step3__name">
            {purpose === LoanPurpose.MORTGAGE ? `?????????????????? ????????????????????????` : `?????????????????? ????????????????????`}
          </span>
          <span className="step3__data">{`${offer.loanPrice.toLocaleString(`ru-RU`)} ????????????`}</span>
        </li>
        <li className="step3__item">
          <span className="step3__name">???????????????????????????? ??????????</span>
          <span className="step3__data">{`${offer.loanFirstPayment.toLocaleString(
            `ru-RU`,
          )} ????????????`}</span>
        </li>
        <li className="step3__item">
          <span className="step3__name">???????? ????????????????????????</span>
          <span className="step3__data">{`${offer.loanTime.toLocaleString(`ru-RU`)} ??????`}</span>
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
            aria-label="??????"
            className={`step3__field name-field ${isError && name.isEmpty && `error`}`}
            type="text"
            name="name-id"
            placeholder="??????"
            required={true}
            value={name.value}
            onChange={evt => name.onChange(evt)}
            onBlur={evt => name.onBlur(evt)}
          />
          {name.isEmpty && (
            <span className={`step3__errorText ${isError && `error`}`}>
              ????????????????????, ?????????????????? ????????
            </span>
          )}
        </label>
        <label className="step3__label">
          <input
            aria-label="??????????????"
            className={`step3__field phone-field ${isError && phone.isEmpty && `error`}`}
            type="tel"
            name="phone-id"
            placeholder="??????????????"
            required={true}
            value={phone.value}
            onKeyDown={evt => onInputPhone(evt)}
            onChange={evt => phone.onChange(evt)}
            onBlur={evt => phone.onBlur(evt)}
          />
          {phone.isEmpty && (
            <span className={`step3__errorText ${isError && `error`}`}>
              ????????????????????, ?????????????????? ????????
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
              ????????????????????, ?????????????????? ????????
            </span>
          )}
          {mail.emailError && !mail.isEmpty && (
            <span className={`step3__errorText ${isError && `error`}`}>???????????????????????? e-mail</span>
          )}
        </label>
        <button className="step3__submit button" type="submit">
          ??????????????????
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
