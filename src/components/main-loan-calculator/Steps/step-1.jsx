import { useState } from 'react';
import { FirstPaymentRate, LoanTerm, LoanPurpose, PriceData, PurposeValue } from '../../../const';
import { useDispatch, useSelector } from 'react-redux';
import {
  changePurpose,
  changePrice,
  changeFirstPayment,
  changeLoanTerm,
} from '../../../store/actions';

const Step1 = () => {
  const { purpose } = useSelector(state => state.DATA);
  const [isClose, setClose] = useState(false);

  const dispatch = useDispatch();

  const openPurposeHandler = () => {
    setClose(!isClose);
  };

  const choiceClickHandler = evt => {
    evt.preventDefault();
    const choice = evt.target.dataset.choice;
    const price = choice === LoanPurpose.MORTGAGE ? PriceData.START_MORTGAGE : PriceData.START_AUTO;
    const firstPayment =
      choice === LoanPurpose.MORTGAGE ? FirstPaymentRate.MORTGAGE : FirstPaymentRate.AUTO;
    const loanTerm = choice === LoanPurpose.MORTGAGE ? LoanTerm.MIN_MORTGAGE : LoanTerm.MIN_AUTO;
    dispatch(changePurpose(choice));
    dispatch(changePrice(price));
    dispatch(changeFirstPayment(firstPayment));
    dispatch(changeLoanTerm(loanTerm));
    openPurposeHandler();
  };

  return (
    <div className="loan-calculator__step1 step step1">
      <h3 className="step__title">Шаг 1. Цель кредита</h3>
      <div className="step__label-wrapper">
        <label className="step__label">
          <input
            value={purpose ? PurposeValue[purpose] : ``}
            aria-label="Цель кредита"
            className="step__field"
            type="text"
            name="purpose"
            placeholder="Выберите цель кредита"
            onClick={openPurposeHandler}
            readOnly={true}
          />
        </label>
        <button
          className={`step__button button ${isClose && `button--close`}`}
          aria-label={!isClose ? `Открыть` : `Закрыть`}
          onClick={openPurposeHandler}>
          <svg width="18" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1l8 8 8-8" stroke="#1F1E25" strokeWidth="2" />
          </svg>
        </button>
      </div>
      <ul className={`step1__list ${isClose && `active`}`}>
        <li className="step1__choice">
          <a
            href="#!"
            className="step1__link"
            data-choice={LoanPurpose.MORTGAGE}
            onClick={choiceClickHandler}>
            {PurposeValue[LoanPurpose.MORTGAGE]}
          </a>
        </li>
        <li className="step1__choice">
          <a
            href="#!"
            className="step1__link"
            data-choice={LoanPurpose.AUTO}
            onClick={choiceClickHandler}>
            {PurposeValue[LoanPurpose.AUTO]}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Step1;
