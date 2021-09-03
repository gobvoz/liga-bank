import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  PriceData,
  FirstPaymentRate,
  LoanTerm,
  LoanPurpose,
  PriceStep,
  Units,
} from '../../../const';
import {
  changePrice,
  changeFirstPayment,
  changeLoanTerm,
  changeMotherMoney,
  changeInsuranceAuto,
  changeInsuranceLive,
} from '../../../store/actions';
import {
  getNumberFromString,
  getLoanTermDescription,
  getLoanTermNumber,
  getCaret,
  setCaretToPos,
} from '../../../utils';

const Step2 = props => {
  const { purpose, price, firstPayment, loanTerm, isMother, isInsuranceAuto, isInsuranceLive } =
    useSelector(state => state.DATA);
  const { isPriceError, setPriceError } = props;
  const [isPrice, setPrice] = useState(`${price.toLocaleString(`ru-RU`)} рублей`);
  const [isFirstPayment, setPayment] = useState(
    `${((price * firstPayment) / FirstPaymentRate.MAX).toLocaleString(`ru-RU`)} рублей`,
  );
  const [isLoanTerm, setLoanTerm] = useState(
    `${loanTerm.toLocaleString(`ru-RU`)}${getLoanTermDescription(loanTerm)}`,
  );
  const [isActiveElement, setActiveElement] = useState(document.getElementById(`name`));
  const [isGap, setGap] = useState(Units.PRICE);
  const [isDecreaseButtonDisabled, setDecreaseButtonDisable] = useState(true);
  const [isIncreaseButtonDisabled, setIncreaseButtonDisable] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setPrice(`${price.toLocaleString(`ru-RU`)} рублей`);
    setPayment(`${((price * firstPayment) / FirstPaymentRate.MAX).toLocaleString(`ru-RU`)} рублей`);
    setLoanTerm(`${loanTerm.toLocaleString(`ru-RU`)}${getLoanTermDescription(loanTerm)}`);
  }, [purpose]);

  useEffect(() => {
    if (isActiveElement) {
      const rangeValue = isActiveElement.value.length;
      let currentCaretPos = getCaret(isActiveElement);
      if (currentCaretPos > rangeValue - isGap) {
        setCaretToPos(isActiveElement, rangeValue - isGap);
      }
    }
  }, [isPrice, isFirstPayment, isLoanTerm]);

  const minPrice =
    purpose === LoanPurpose.MORTGAGE ? PriceData.START_MORTGAGE : PriceData.START_AUTO;
  const maxPrice = purpose === LoanPurpose.MORTGAGE ? PriceData.END_MORTGAGE : PriceData.END_AUTO;
  const priceStep = purpose === LoanPurpose.MORTGAGE ? PriceStep.MORTGAGE : PriceStep.AUTO;
  const firstPaymentMin =
    purpose === LoanPurpose.MORTGAGE ? FirstPaymentRate.MORTGAGE : FirstPaymentRate.AUTO;
  const minLoanTerm = purpose === LoanPurpose.MORTGAGE ? LoanTerm.MIN_MORTGAGE : LoanTerm.MIN_AUTO;
  const maxLoanTerm = purpose === LoanPurpose.MORTGAGE ? LoanTerm.MAX_MORTGAGE : LoanTerm.MAX_AUTO;

  useEffect(() => {
    let newPrice;
    if (isPrice.search(`рублей`) > 0) {
      newPrice = getNumberFromString(isPrice, `рублей`);
    } else {
      newPrice = parseInt(isPrice, 10);
    }

    if (newPrice === minPrice) {
      setDecreaseButtonDisable(true);
    } else if (isDecreaseButtonDisabled) {
      setDecreaseButtonDisable(false);
    }

    if (newPrice === maxPrice) {
      setIncreaseButtonDisable(true);
    } else if (isIncreaseButtonDisabled) {
      setIncreaseButtonDisable(false);
    }
  }, [isPrice]);

  const setNewPrice = newPrice => {
    dispatch(changePrice(newPrice));
    setPrice(`${newPrice.toLocaleString(`ru-RU`)} рублей`);
    setPayment(
      `${((newPrice * firstPayment) / FirstPaymentRate.MAX).toLocaleString(`ru-RU`)} рублей`,
    );
  };

  const checkNewPrice = newPrice => {
    if (newPrice < minPrice) {
      if (!isPriceError) {
        setPriceError(true);
        return minPrice;
      } else {
        setPriceError(false);
        return minPrice;
      }
    } else {
      if (newPrice > maxPrice) {
        if (!isPriceError) {
          setPriceError(true);
          return maxPrice;
        } else {
          setPriceError(false);
          return maxPrice;
        }
      } else {
        setPriceError(false);
        return newPrice;
      }
    }
  };

  const inputClickHandler = (evt, gap) => {
    const currentInput = evt.target;
    if (isPriceError) {
      let newPrice = checkNewPrice(price);
      setNewPrice(newPrice);
      setPriceError(false);
      setCaretToPos(currentInput, 9);
    } else {
      const rangeValue = evt.target.value.length;
      let currentCaretPos = getCaret(currentInput);
      if (currentCaretPos > rangeValue - gap) {
        setCaretToPos(currentInput, rangeValue - gap);
      }
    }
  };

  const priceChangeHandler = evt => {
    let newPrice;
    if (evt.target.value.search(`рублей`) > 0) {
      newPrice = getNumberFromString(evt.target.value, `рублей`);
    } else {
      newPrice = parseInt(evt.target.value, 10);
    }
    newPrice && setNewPrice(newPrice);
  };

  const priceCheckHandler = evt => {
    let newPrice;
    if (evt.target.value.search(`рублей`) > 0) {
      newPrice = getNumberFromString(evt.target.value, `рублей`);
    } else {
      newPrice = parseInt(evt.target.value, 10);
    }
    if (newPrice < minPrice || newPrice > maxPrice) {
      setPriceError(true);
    } else {
      newPrice && setNewPrice(newPrice);
    }
  };

  const priceDownClickHandler = () => {
    let newPrice = checkNewPrice(price - priceStep);
    setNewPrice(newPrice);
  };

  const priceUpClickHandler = () => {
    let newPrice = checkNewPrice(price + priceStep);
    setNewPrice(newPrice);
  };

  const loanFirstPaymentHandler = evt => {
    let newPayment;
    if (evt.target.value.search(`рублей`) > 0) {
      newPayment = getNumberFromString(evt.target.value, `рублей`);
    } else {
      newPayment = parseInt(evt.target.value, 10);
    }
    if (newPayment) {
      setPayment(`${newPayment.toString()}`);
      dispatch(changeFirstPayment((newPayment * FirstPaymentRate.MAX) / price));
    }
  };

  const loanFirstPaymentCheckHandler = evt => {
    let newPayment;
    if (evt.target.value.search(`рублей`) > 0) {
      newPayment = getNumberFromString(evt.target.value, `рублей`);
    } else {
      newPayment = parseInt(evt.target.value, 10);
    }
    let paymentRate = (newPayment * FirstPaymentRate.MAX) / price;
    if (paymentRate < firstPaymentMin) {
      paymentRate = firstPaymentMin;
    } else if (paymentRate > FirstPaymentRate.MAX) {
      paymentRate = FirstPaymentRate.MAX;
    }
    setPayment(`${((price * paymentRate) / FirstPaymentRate.MAX).toLocaleString(`ru-RU`)} рублей`);
    dispatch(changeFirstPayment(paymentRate));
  };

  const loanFirstPaymentRangeHandler = evt => {
    const paymentRate = evt.target.value;
    setPayment(`${((price * paymentRate) / FirstPaymentRate.MAX).toLocaleString(`ru-RU`)} рублей`);
    dispatch(changeFirstPayment(paymentRate));
  };

  const loanTermChangeHandler = evt => {
    const newTerm = parseInt(evt.target.value, 10);
    if (newTerm) {
      setLoanTerm(`${newTerm.toString()}${getLoanTermDescription(newTerm)}`);
      dispatch(changeLoanTerm(newTerm));
    }
  };

  const loanTermCheckHandler = evt => {
    let newTerm = getLoanTermNumber(evt.target.value);
    if (!newTerm || newTerm < minLoanTerm) {
      newTerm = minLoanTerm;
    } else if (newTerm > maxLoanTerm) {
      newTerm = maxLoanTerm;
    }
    setLoanTerm(`${newTerm.toLocaleString(`ru-RU`)}${getLoanTermDescription(newTerm)}`);
    dispatch(changeLoanTerm(newTerm));
  };

  const loanTermRangeChangeHandler = evt => {
    const newTerm = parseInt(evt.target.value, 10);
    setLoanTerm(`${newTerm.toLocaleString(`ru-RU`)}${getLoanTermDescription(newTerm)}`);
    dispatch(changeLoanTerm(newTerm));
  };

  const onlyNumberInput = evt => {
    if (
      !(
        evt.key === `ArrowLeft` ||
        evt.key === `ArrowRight` ||
        evt.key === `Backspace` ||
        evt.key === `Tab` ||
        evt.key === `Delete` ||
        /[0-9\+\ \-\(\)]/.test(evt.key)
      )
    ) {
      evt.preventDefault();
    }
  };

  return (
    <div className="loan-calculator__step2 step step2">
      <h3 className="step__title">Шаг 2. Введите параметры кредита</h3>
      <div className="step__label-wrapper">
        <label className="step__label">
          {purpose === LoanPurpose.MORTGAGE ? `Стоимость недвижимости` : `Стоимость автомобиля`}
          <input
            value={!isPriceError ? isPrice : `Некорректное значение`}
            className={`step__field step2__field ${isPriceError && `field-error`}`}
            type="text"
            id="price"
            name="price"
            onClick={evt => inputClickHandler(evt, Units.PRICE)}
            onChange={priceChangeHandler}
            onBlur={priceCheckHandler}
            onKeyDown={onlyNumberInput}
            onFocus={evt => {
              setActiveElement(evt.target);
              setGap(Units.PRICE);
            }}
          />
        </label>
        <span className="step__comments">
          От {minPrice.toLocaleString(`ru-RU`)} до {maxPrice.toLocaleString(`ru-RU`)} рублей
        </span>
        <button
          className="step__button button button--decrease"
          aria-label="Уменьшить"
          onClick={priceDownClickHandler}
          disabled={isDecreaseButtonDisabled ? true : false}>
          <svg
            width="16"
            height="2"
            viewBox="0 0 16 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line y1="1" x2="16" y2="1" stroke="#1F1E25" strokeWidth="2" />
          </svg>
        </button>
        <button
          className="step__button button button--increase"
          aria-label="Увеличить"
          onClick={priceUpClickHandler}
          disabled={isIncreaseButtonDisabled ? true : false}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8H16M8 0V16" stroke="#1F1E25" strokeWidth="2" />
          </svg>
        </button>
      </div>
      <div className="step__label-wrapper">
        <label className="step__label">
          Первоначальный взнос
          <input
            disabled={isPriceError}
            value={isFirstPayment}
            className="step__field step2__field"
            type="text"
            name="firstPayment"
            onClick={evt => inputClickHandler(evt, Units.PRICE)}
            onChange={loanFirstPaymentHandler}
            onBlur={loanFirstPaymentCheckHandler}
            onKeyDown={onlyNumberInput}
            onFocus={evt => {
              setActiveElement(evt.target);
              setGap(Units.PRICE);
            }}
          />
        </label>
        <input
          disabled={isPriceError}
          id="payment-range"
          className="step__range"
          type="range"
          min={`${firstPaymentMin}`}
          max="100"
          step="5"
          value={`${firstPayment}`}
          onInput={loanFirstPaymentRangeHandler}
        />
        <label htmlFor="payment-range" className="visually-hidden">
          Изменить значение первого платежа
        </label>
        <span className="step__comments">{firstPayment.toLocaleString(`ru-RU`)}%</span>
      </div>
      <div className="step__label-wrapper">
        <label className="step__label">
          Срок кредитования
          <input
            disabled={isPriceError}
            value={isLoanTerm}
            className="step__field step2__field"
            type="text"
            name="loanTerm"
            onClick={evt => inputClickHandler(evt, Units.YEAR)}
            onChange={loanTermChangeHandler}
            onBlur={loanTermCheckHandler}
            onKeyDown={onlyNumberInput}
            onFocus={evt => {
              setActiveElement(evt.target);
              setGap(Units.YEAR);
            }}
          />
        </label>
        <input
          disabled={isPriceError}
          className="step__range"
          id="term-range"
          type="range"
          min={`${minLoanTerm}`}
          max={`${maxLoanTerm}`}
          step="1"
          value={`${loanTerm}`}
          onChange={loanTermRangeChangeHandler}
        />
        <label htmlFor="term-range" className="visually-hidden">
          Изменить значение срока кредитования
        </label>
        <div className="step__comments-list">
          <span className="step__comments">
            {minLoanTerm.toLocaleString(`ru-RU`)}
            {getLoanTermDescription(minLoanTerm)}
          </span>
          <span className="step__comments">{maxLoanTerm.toLocaleString(`ru-RU`)} лет</span>
        </div>
      </div>
      {purpose === LoanPurpose.MORTGAGE && (
        <div className="step__checkbox-wrapper">
          <input
            disabled={isPriceError}
            id="step-checkbox-mother"
            className="step__checkbox visually-hidden"
            type="checkbox"
            name="mother"
            onChange={() => dispatch(changeMotherMoney(!isMother))}
          />
          <label htmlFor="step-checkbox-mother" className="step__label step__label--checkbox">
            Использовать материнский капитал
          </label>
        </div>
      )}
      {purpose === LoanPurpose.AUTO && (
        <div className="step__checkbox-wrapper">
          <input
            disabled={isPriceError}
            id="step-checkbox-auto"
            className="step__checkbox visually-hidden"
            type="checkbox"
            name="mother"
            onChange={() => dispatch(changeInsuranceAuto(!isInsuranceAuto))}
          />
          <label htmlFor="step-checkbox-auto" className="step__label step__label--checkbox">
            Оформить КАСКО в нашем банке
          </label>
          <input
            disabled={isPriceError}
            id="step-checkbox-live"
            className="step__checkbox visually-hidden"
            type="checkbox"
            name="mother"
            onChange={() => dispatch(changeInsuranceLive(!isInsuranceLive))}
          />
          <label htmlFor="step-checkbox-live" className="step__label step__label--checkbox">
            Оформить Страхование жизни в нашем банке
          </label>
        </div>
      )}
    </div>
  );
};

Step2.propTypes = {
  isPriceError: PropTypes.bool.isRequired,
  setPriceError: PropTypes.func.isRequired,
};

export default Step2;
